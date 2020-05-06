import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-doner-state",
  templateUrl: "./doner-state.page.html",
  styleUrls: ["./doner-state.page.scss"],
})
export class DonerStatePage implements OnInit {
  activUserData;
  sdata = [];
  stateData = [];
  editinfo;
  dist: boolean = false;
  constructor(
    public service: AuthService,
    private router: Router,

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

  ngOnInit() {
    this.getstateData(this.activUserData);
  }

  goback() {
    this.nav.back();
  }

  getstateData(countryname) {
    this.service.present();
    this.sdata = [];
    this.stateData = [];
    this.service.getstate(countryname).subscribe(
      (data) => {
        if (data["statusCode"] == 200) {
          this.sdata = data["data"];
          this.sdata.forEach((element) => {
            if (!this.stateData.find((o) => o == element["stateName"])) {
              this.stateData.push(element["stateName"]);
            }
          });

          this.service.dismiss();
        }
      },
      (error) => {
        this.service.dismiss();
      }
    );
  }

  getdistrictdata(statedata) {
    this.editinfo = "";
    this.editinfo = statedata;
    if (this.editinfo != "") {
      this.dist = true;
    } else {
      this.dist = false;
    }
  }

  gotDistrict() {
    this.router.navigate(["/doner-district", JSON.stringify(this.editinfo)]);
  }
}
