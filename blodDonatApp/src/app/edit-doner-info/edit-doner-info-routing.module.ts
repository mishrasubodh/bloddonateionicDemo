import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDonerInfoPage } from './edit-doner-info.page';

const routes: Routes = [
  {
    path: '',
    component: EditDonerInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDonerInfoPageRoutingModule {}
