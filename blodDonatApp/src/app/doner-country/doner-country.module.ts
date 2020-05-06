import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonerCountryPageRoutingModule } from './doner-country-routing.module';

import { DonerCountryPage } from './doner-country.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonerCountryPageRoutingModule
  ],
  declarations: [DonerCountryPage]
})
export class DonerCountryPageModule {}
