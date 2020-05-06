import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonerloginPageRoutingModule } from './donerlogin-routing.module';

import { DonerloginPage } from './donerlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonerloginPageRoutingModule
  ],
  declarations: [DonerloginPage]
})
export class DonerloginPageModule {}
