import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  p:number = 1;
  bloddata = [];
  editinfo = [];
  bdata = [];
  showcountry: boolean = false;
  showuser: boolean = false;
  isLoading = false;
  loading: any;
  isshowing: boolean = false;
  activUserData: [];
  emaildata: any;
  country;

  constructor(
    public service: AuthService,
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute
  ) {
    this.service.showUserData.subscribe((showuser) => {
      this.isshowing = showuser;
    });
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
    this.getblodData();
  }

  ionViewDidLeave() {
    this.getblodData();
    localStorage.removeItem("blod");
    localStorage.removeItem("country");
    localStorage.removeItem("dist");
    console.log("ionViewDidLeave is fired ");
  }

  async deleteConfirm(d) {
    this.emaildata = d.email;
    const alert = await this.alertController.create({
      header: "Confirm!",
      message: "do you want to delete",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            // console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Okay",
          cssClass: "secondary",
          handler: () => {
            this.service.deleteuser(this.emaildata).subscribe(
              (data) => {
                if (
                  data["statusCode"] == 200 &&
                  data["message"] == "item succesfull delete"
                ) {
                  this.isshowing = false;
                  this.getblodData();
                } else {
                  this.service.presentAlertConfirm(data["message"]);
                }
              },
              (error) => {
                console.log(error);
              }
            );
          },
        },
      ],
    });

    await alert.present();
  }

  getblodData() {
    this.bloddata = [];
    this.bdata = [];
    this.service.getBoodGroupData().subscribe((data) => {
      if (data["statusCode"] == 200) {
        this.bloddata = data["data"];
        this.bloddata.forEach((element) => {
          if (!this.bdata.find((o) => o == element["bloodGroupName"])) {
            this.bdata.push(element["bloodGroupName"]);
          }
        });
      }
    });
  }
  getcounty(blod) {
    this.country = "";
    this.country = blod;
    if (this.country != "") {
      this.showcountry = true;
    } else {
      this.showcountry = false;
    }
  }

  gocountrypage(){
    this.router.navigate(["/doner-country", JSON.stringify(this.country)]);
  }
  goEditPage(d) {
    this.editinfo = [];
    this.editinfo.push(d);
    this.router.navigate(["/edit-doner-info", JSON.stringify(this.editinfo)]);
  }
}
