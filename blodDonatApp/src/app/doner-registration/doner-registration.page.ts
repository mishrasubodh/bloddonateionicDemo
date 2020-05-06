import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
@Component({
  selector: 'app-doner-registration',
  templateUrl: './doner-registration.page.html',
  styleUrls: ['./doner-registration.page.scss'],
})
export class DonerRegistrationPage implements OnInit {
  isLoading = false;
  userdata= [];
  userarraydata=[]
  constructor(
    public service: AuthService,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  async present() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        message: "please wait",
        // duration: 5000,
      })
      .then((a) => {
        a.present().then(() => {
     
          if (!this.isLoading) {
            a.dismiss().then(() => console.log("abort presenting"));
          }
        });
      });
  }
  async dismiss() {
    this.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log("dismissed"));
  }
  async presentAlertConfirm(msg) {
    const alert = await this.alertController.create({
      header: "Confirm!",
      message: msg,
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   cssClass: 'secondary',
        //   handler: (blah) => {
        //     console.log('Confirm Cancel: blah');
        //   }
        // },
        {
          text: "Okay",
          cssClass: "secondary",
          handler: () => {
           
          },
        },
      ],
    });

    await alert.present();
  }

  signUp(f) {
    if (
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(f.form.value.email) ==
      false
    ) {
      return this.presentAlertConfirm("please fill valid email");
    }
    this.service.login(f.form.value).subscribe((data) => {
      if(data['statusCode']==200 && data['data']){
        this.userdata=[]
        this.userdata.push(data['data']) 
        this.service.updatedUserData(true)
        this.router.navigate([
          "/home",
          JSON.stringify(this.userdata),
        ]);
      }
    },error=>{
      return this.presentAlertConfirm(error.error['message']);
    });
  }


  
  ngOnInit() {
  }

}
