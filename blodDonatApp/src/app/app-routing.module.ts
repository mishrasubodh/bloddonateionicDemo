import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home/:data',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'doner-info/:data',
    loadChildren: () => import('./doner-info/doner-info.module').then( m => m.DonerInfoPageModule)
  },
  {
    path: 'donerlogin',
    loadChildren: () => import('./donerlogin/donerlogin.module').then( m => m.DonerloginPageModule)
  },
  {
    path: 'doner-registration',
    loadChildren: () => import('./doner-registration/doner-registration.module').then( m => m.DonerRegistrationPageModule)
  },
  {
    path: 'edit-doner-info/:data',
    loadChildren: () => import('./edit-doner-info/edit-doner-info.module').then( m => m.EditDonerInfoPageModule)
  },
  {
    path: 'doner-country/:data',
    loadChildren: () => import('./doner-country/doner-country.module').then( m => m.DonerCountryPageModule)
  },
  {
    path: 'doner-state/:data',
    loadChildren: () => import('./doner-state/doner-state.module').then( m => m.DonerStatePageModule)
  },
  {
    path: 'doner-district/:data',
    loadChildren: () => import('./doner-district/doner-district.module').then( m => m.DonerDistrictPageModule)
  },
  {
    path: 'sms',
    loadChildren: () => import('./sms/sms.module').then( m => m.SmsPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
