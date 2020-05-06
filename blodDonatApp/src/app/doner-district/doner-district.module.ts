import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonerDistrictPageRoutingModule } from './doner-district-routing.module';

import { DonerDistrictPage } from './doner-district.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonerDistrictPageRoutingModule
  ],
  declarations: [DonerDistrictPage]
})
export class DonerDistrictPageModule {}
