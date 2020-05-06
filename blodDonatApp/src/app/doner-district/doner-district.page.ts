import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { AlertController, NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-doner-district",
  templateUrl: "./doner-district.page.html",
  styleUrls: ["./doner-district.page.scss"],
})
export class DonerDistrictPage implements OnInit {
  activUserData;
  ddata = [];
  singledist = [];
  districtdata = [];
  checuser;
  userdata = [];
  showuser: boolean = false;
  constructor(
    public service: AuthService,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private nav: NavController
  ) {
    this.route.params.subscribe(
      (params) => {
        this.activUserData = JSON.parse(params.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  goback() {
    this.nav.back();
  }
  ngOnInit() {
    this.getdistrictdata(this.activUserData);
  }
  getdistrictdata(distName) {
    localStorage.removeItem("dist");
    localStorage.setItem("dist", distName);
    this.service.present();
    this.ddata = [];
    this.districtdata = [];
    this.service.getdisrrict(distName).subscribe(
      (data) => {
        if (data["statusCode"] == 200) {
          this.ddata = data["data"];
          this.ddata.forEach((elem) => {
            if (!this.districtdata.find((o) => o == elem["districtName"])) {
              this.districtdata.push(elem["districtName"]);
            }
          });

          this.showuser = false;
          this.service.dismiss();
        }
      },
      (error) => {
        this.service.dismiss();
      }
    );
  }

  getuserchecked(checkeduser) {
    this.checuser = "";
    this.checuser = checkeduser;
    if(this.checuser!=""){
    this.showuser = true;
    }else{
      this.showuser =false;
    }
  }
  async getuser() {
    this.singledist = [];
    this.singledist = await this.ddata.find(
      (o) => o["districtName"] == this.checuser
    );
    if (this.singledist) {
      this.service.user(this.singledist).subscribe((data) => {
        if (data["statusCode"] == 200) {
          this.userdata = data["result"];
          if (this.userdata.length > 0) {
            this.router.navigate([
              "/doner-info",
              JSON.stringify(this.userdata),
            ]);
          } else {
            return this.service.presentAlertConfirm(data["message"]);
          }
        }
      });
    }
  }
}
