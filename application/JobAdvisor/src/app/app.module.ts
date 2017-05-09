import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { LocationTracker } from '../providers/location-tracker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServerPage } from '../pages/server/server';
import { Logged } from '../pages/logged/logged';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';

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
		LocationTracker,
		BackgroundGeolocation,
		Geolocation,
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
