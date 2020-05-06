import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { SmsPage } from "../sms/sms.page";
import { SharePage } from "../share/share.page";
import { CallNumber } from "@ionic-native/call-number/ngx";
@Component({
  selector: "app-doner-info",
  templateUrl: "./doner-info.page.html",
  styleUrls: ["./doner-info.page.scss"],
})
export class DonerInfoPage implements OnInit {
  data: any;
  public items: any = [];
  constructor(
    private route: ActivatedRoute,
    private callNumber: CallNumber,
    public modalController: ModalController
  ) {
   
    this.route.params.subscribe((params) => {
      this.data = JSON.parse(params["data"]);
    });
  }
 

  ngOnInit() {
    
  }
  
  showinfo(donerdata) {
    console.log("click on user");
  //   jQuery(function($) {
  //   $( document ).ready(function() {
  //     $('.collapse').on('show.bs.collapse', function () {
  //       $('.collapse').not(this).collapse('hide');
  //     });
  //   });
  // });
  
  }
  
  calldoner(d) {
    this.callNumber.callNumber(d.phoneNumber, true)
      .then((res) => console.log("Launched dialer!", res))
      .catch((err) => console.log("Error launching dialer", err));
  }
  async messagedoner(d) {
    const modal = await this.modalController.create({
      component: SmsPage,
      cssClass: "my-custom-modal-css",
      componentProps: {
        number: d.phoneNumber,
      },
    });
    return await modal.present();
  }

  async sharedoner(d) {
    const modal = await this.modalController.create({
      component: SharePage,
      cssClass: "y-custom-modal-css",
      componentProps: {
        data: d,
      },
    });
    return await modal.present();
  }
}
