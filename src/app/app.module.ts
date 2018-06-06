import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrazionePage } from '../pages/registrazione/registrazione';
import { ProfiloPage } from '../pages/profilo/profilo';
import { NegozioPage } from '../pages/negozio/negozio';
import { CorsiPage } from '../pages/corsi/corsi';
import { ContattaciPage } from '../pages/contattaci/contattaci';
import { HttpModule } from '@angular/http';
import { OAuthService, UrlHelperService } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrazionePage,
    ProfiloPage,
    NegozioPage,
    CorsiPage,
    ContattaciPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrazionePage,
    ProfiloPage,
    NegozioPage,
    CorsiPage,
    ContattaciPage
  ],
  providers: [
    UrlHelperService,
    OAuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}