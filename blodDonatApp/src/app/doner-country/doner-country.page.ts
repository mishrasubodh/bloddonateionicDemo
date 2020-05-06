import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { AlertController,NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-doner-country",
  templateUrl: "./doner-country.page.html",
  styleUrls: ["./doner-country.page.scss"],
})
export class DonerCountryPage implements OnInit {
  activUserData: any;
  showState: boolean = false;
  cdata = [];
  countryData = [];
  editinfo 
  constructor(
    public service: AuthService,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private nav :NavController
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
goback(){
  this.nav.back()
}

  ngOnInit() {
   
    this.getContryData(this.activUserData);
  }

  getContryData(blod) {
    this.service.present()
    this.cdata = [];
    this.countryData = [];
    localStorage.removeItem("blod");
    localStorage.setItem("blod", blod);
    this.service.updatedDataSelection(blod);
    this.service.getcounty(blod).subscribe(
      (data) => {
        if (data["statusCode"] == 200) {
          this.cdata = data["data"];
          this.cdata.forEach((elem) => {
            if (!this.countryData.find((o) => o == elem["countryName"])) {
              this.countryData.push(elem["countryName"]);
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

  getstate(country) {
    this.editinfo =" "
    this.editinfo=country;
    if (this.editinfo!="") {
      this.showState = true;
     
    }
    this.showState = false;
  }
  goStatePage() {
    this.router.navigate(["/doner-state", JSON.stringify(this.editinfo)]);
  }
}
