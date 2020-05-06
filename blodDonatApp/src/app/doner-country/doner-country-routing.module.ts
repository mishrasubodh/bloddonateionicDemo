import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonerCountryPage } from './doner-country.page';

const routes: Routes = [
  {
    path: '',
    component: DonerCountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonerCountryPageRoutingModule {}
