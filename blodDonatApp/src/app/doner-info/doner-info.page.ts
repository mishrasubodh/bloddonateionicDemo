import { Component, OnInit,Renderer2 } from "@angular/core";
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
    public modalController: ModalController,
    private render: Renderer2
  ) {
   
    this.route.params.subscribe((params) => {
      this.data = JSON.parse(params["data"]);
    });
  }
 

  ngOnInit() {
    
  }
  
  showinfo(donerdata) { 
   if(document.getElementById(`${donerdata}`).style.display == "block"){ 
    document.getElementById(`${donerdata}`).style.display = "none";
   }else if(document.getElementById(`${donerdata}`).style.display == "none"){
   document.getElementsByClassName("active");
    document.getElementById(`${donerdata}`).style.display = "block";
   }
    //document.getElementById(donerdata).style.display = 'none';
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
