import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonerRegistrationPageRoutingModule } from './doner-registration-routing.module';

import { DonerRegistrationPage } from './doner-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonerRegistrationPageRoutingModule
  ],
  declarations: [DonerRegistrationPage]
})
export class DonerRegistrationPageModule {}
