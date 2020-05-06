import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
@Component({
  selector: "app-donerlogin",
  templateUrl: "./donerlogin.page.html",
  styleUrls: ["./donerlogin.page.scss"],
})
export class DonerloginPage implements OnInit {
  isLoading = false;
  usersuccesData=[]
  constructor(
    public service: AuthService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router,
  ) {}

  ngOnInit() {}

  async present() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        message: "please wait",
        // duration: 5000,
      })
      .then((a) => {
        a.present().then(() => {
          console.log("presented");
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
    if (f.form.value.password !== f.form.value.confirm_password) {
      return this.presentAlertConfirm(
        "password and confirm password does not match"
      );
    }
    if (
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(f.form.value.email) ==
      false
    ) {
      return this.presentAlertConfirm("please fill valid email");
    }
    this.service.userLogin(f.form.value).subscribe((data) => {
      if(data['statusCode']==200 && data['message']=="item saved to the database"){
     this.usersuccesData=[]
        data['fromlogin']
        this.usersuccesData.push(data['result'])
        this.router.navigate([
          "/home",
         JSON.stringify(this.usersuccesData),
        ]);
      }else{
        return this.presentAlertConfirm(
          " user not register something went wrong!"
        );
      }
    },error=>{
      console.log(error);
      return this.presentAlertConfirm(error.error.message);
    });
  }
}
