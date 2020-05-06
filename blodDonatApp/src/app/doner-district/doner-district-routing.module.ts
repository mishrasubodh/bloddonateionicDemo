import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonerDistrictPage } from './doner-district.page';

const routes: Routes = [
  {
    path: '',
    component: DonerDistrictPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonerDistrictPageRoutingModule {}
