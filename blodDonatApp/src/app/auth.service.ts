import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoading = false;
  private dataSource = new BehaviorSubject<string>("");
  data = this.dataSource.asObservable();

  private showuser = new BehaviorSubject<boolean>(false);
  showUserData = this.showuser.asObservable();

  url = "http://localhost:5000";

  constructor(
    private Http: HttpClient,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private route: ActivatedRoute
    ) {}


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
            a.dismiss().then(() =>{});
          }
        });
      });
  }
  async dismiss() {
    this.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() =>{});
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
          //  console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }




  updatedDataSelection(data) {
    this.dataSource.next(data);
  }
  updatedUserData(data) {
    this.showuser.next(data);
  }

userLogin(data){
  return this.Http.post(`${this.url}/user_group`,data);
}

useredit(data){
  return this.Http.post(`${this.url}/user_group/edit`,data);
}

deleteuser(email){ 
  return this.Http.post(`${this.url}/user_group/remove`,{email});
}

  getBoodGroupData() {
    return this.Http.get(`${this.url}/blood_Group`);
  }
  getcounty(bloodGroupName) {

    return this.Http.post(`${this.url}/country_group`,{bloodGroupName});
  }

  getstate(countryName) {
    return this.Http.get(
      `${this.url}/state_group?${`countryName`}=${countryName}`
    );
  }

  getdisrrict(distnamrName) {
    return this.Http.get(
      `${this.url}/district_group?${`statename`}=${distnamrName}`
    );
  }

  user(distdata) {
    delete distdata._id;
    delete distdata.__v;
    distdata["blodGroup"] = this.data.source["_value"];
    return this.Http.post(`${this.url}/user_group/getuser`, distdata);
  }

  login(logindata) {
    return this.Http.post(`${this.url}/email_data/login`, logindata);
  }

}
