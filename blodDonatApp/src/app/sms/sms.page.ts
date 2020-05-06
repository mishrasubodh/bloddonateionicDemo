import { Component, OnInit, Input } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { SMS } from "@ionic-native/sms/ngx";
@Component({
  selector: "app-sms",
  templateUrl: "./sms.page.html",
  styleUrls: ["./sms.page.scss"],
})
export class SmsPage implements OnInit {
  @Input() number: any;
  myStuff = "";
  constructor(
    private nav: NavController,
    public modalCtrl: ModalController,
    private sms: SMS
  ) {}

  sendmsg(sms) {
    let PhoneNumber = JSON.stringify(this.number);
    try {
      this.sms.send(PhoneNumber, sms).then((data) => {
        console.log(data, "data after send message");
      });
    } catch {
      console.log("comin in cath on send sms modal");
    }
  }
  ngOnInit() {
    console.log(this.number, "data on sms");
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
