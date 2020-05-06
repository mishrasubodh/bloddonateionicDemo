import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
  @Input() data: any;
  imgURL: string;
  constructor(
    public modalCtrl: ModalController,
    private socialShaire: SocialSharing,
  ) { }

  ngOnInit() {
    console.log(this.data,"data")
  }


  ShareOnTwitter() {
    this.socialShaire
      .shareViaTwitter(null, this.imgURL)
      .then((res) => {
        console.log(res, "res");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async SharebyEmail() {
    this.socialShaire
      .shareViaEmail(
        "this is my  message",
        "my subject",
        ["subodh.shipgig@gmail.com"],
        null,
        null,
        this.imgURL
      )
      .then((res) => {
        console.log(res, "res");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  async ShareOnFacebook() {
    this.socialShaire
      .shareViaFacebook(null, this.imgURL)
      .then((res) => {
        console.log(res, "res");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  async SharewithWhatsApp() {
    this.socialShaire
      .shareViaWhatsApp(null, this.imgURL)
      .then((res) => {
        console.log(res, "res");
      })
      .catch((e) => console.log(e));
  }


  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
