import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DonerInfoPageRoutingModule } from './doner-info-routing.module';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { DonerInfoPage } from './doner-info.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    DonerInfoPageRoutingModule,
    
  
  ],
  providers:[CallNumber],
  declarations: [DonerInfoPage],
  
  
})
export class DonerInfoPageModule {}
