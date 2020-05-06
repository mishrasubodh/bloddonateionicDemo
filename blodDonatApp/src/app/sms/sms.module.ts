import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmsPageRoutingModule } from './sms-routing.module';
import { SMS } from '@ionic-native/sms/ngx';
import { SmsPage } from './sms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmsPageRoutingModule
  ],
  declarations: [SmsPage],
  providers:[SMS],
})
export class SmsPageModule {}
