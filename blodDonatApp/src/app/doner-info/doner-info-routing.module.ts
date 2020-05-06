import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonerInfoPage } from './doner-info.page';

const routes: Routes = [
  {
    path: '',
    component: DonerInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonerInfoPageRoutingModule {}
