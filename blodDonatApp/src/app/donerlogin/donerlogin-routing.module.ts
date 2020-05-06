import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonerloginPage } from './donerlogin.page';

const routes: Routes = [
  {
    path: '',
    component: DonerloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonerloginPageRoutingModule {}
