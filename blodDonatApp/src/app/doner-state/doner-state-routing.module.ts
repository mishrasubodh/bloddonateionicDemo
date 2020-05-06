import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonerStatePage } from './doner-state.page';

const routes: Routes = [
  {
    path: '',
    component: DonerStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonerStatePageRoutingModule {}
