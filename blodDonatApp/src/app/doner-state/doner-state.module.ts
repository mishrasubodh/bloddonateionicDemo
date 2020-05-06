import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonerStatePageRoutingModule } from './doner-state-routing.module';

import { DonerStatePage } from './doner-state.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonerStatePageRoutingModule
  ],
  declarations: [DonerStatePage]
})
export class DonerStatePageModule {}
