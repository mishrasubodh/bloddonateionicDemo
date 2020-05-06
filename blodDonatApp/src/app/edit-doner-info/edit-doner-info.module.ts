import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDonerInfoPageRoutingModule } from './edit-doner-info-routing.module';

import { EditDonerInfoPage } from './edit-doner-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDonerInfoPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditDonerInfoPage]
})
export class EditDonerInfoPageModule {}
