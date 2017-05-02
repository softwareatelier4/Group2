import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServerPage } from '../pages/server/server';
import { Logged } from '../pages/logged/logged';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  ServerPage,
  Logged
  ],
  imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp),
  HttpModule,
  IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  ServerPage,
  Logged
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
