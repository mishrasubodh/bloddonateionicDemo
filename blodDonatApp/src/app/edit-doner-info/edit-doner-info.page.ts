import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
@Component({
  selector: 'app-edit-doner-info',
  templateUrl: './edit-doner-info.page.html',
  styleUrls: ['./edit-doner-info.page.scss'],
})
export class EditDonerInfoPage implements OnInit {
  isLoading = false;
  userdata=[]
  signupform: FormGroup;
 //
 //userdat={}
 userData = { "name": "", "email": "", "bloodGroupName": "", "phoneNumber": "" ,"countryName": "", "stateName": "", "districtname": "" };
 //userData = { "name": "", "email": "", "bloodGroupName": "", "phoneNumber": "" ,"countryName": "", "stateName": "", "districtname": "" };
 data=[]
  constructor(
    private route: ActivatedRoute,
    public service: AuthService,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {
  this.datafromHome();


   }
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
        {
          text: "Okay",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }
async datafromHome(){
  this.route.params.subscribe(params => {
    this.data =JSON.parse(params['data'])
});}

  ngOnInit() {
    this.userData.name=this.data[0].userName
    this.userData.email=this.data[0].email
    this.userData.bloodGroupName=this.data[0].bloodGroupName
    this.userData.phoneNumber=this.data[0].phoneNumber
    this.userData.countryName=this.data[0].countryName
    this.userData.stateName=this.data[0].stateName
    this.userData.districtname=this.data[0].stateName



    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      bloodGroupName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$'), Validators.minLength(1), Validators.maxLength(10)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      countryName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1), Validators.maxLength(10)]),
      stateName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1), Validators.maxLength(10)]),
      districtname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1), Validators.maxLength(10)]),
    });
  }

  signup(userData){
    userData['_id']=this.data[0]._id;
    this.present()
    console.log(userData,"userData userData")
    this.service.useredit(userData).subscribe((data) => {
      console.log(data,"data")
      if(data['statusCode']==200 && data['result']){
        this.dismiss()
        this.userdata=[]
        this.userdata.push(data['result']) 
        this.service.updatedUserData(true)
        this.router.navigate([
          "/home",
          JSON.stringify(this.userdata),
        ]);
      }
    },error=>{
      this.dismiss()
      console.log(error)
      return this.presentAlertConfirm(error['message']);
    });

  }

 
}
