import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonerRegistrationPage } from './doner-registration.page';

const routes: Routes = [
  {
    path: '',
    component: DonerRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonerRegistrationPageRoutingModule {}
