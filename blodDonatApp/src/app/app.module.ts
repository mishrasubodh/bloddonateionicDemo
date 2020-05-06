import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {SmsPageModule} from "./sms/sms.module";
import {SmsPage} from './sms/sms.page';
import{SharePageModule} from './share/share.module';
import{SharePage} from './share/share.page'
import {SocialSharing} from '@ionic-native/social-sharing/ngx'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [SmsPage,SharePage],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SmsPageModule,
    SharePageModule
  ],
  providers: [
    SocialSharing,
    StatusBar,
    HttpClientModule,
    HttpClient,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]

})
export class AppModule {}
