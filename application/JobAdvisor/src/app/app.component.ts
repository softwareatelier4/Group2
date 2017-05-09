import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { ServerPage } from '../pages/server/server';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;

	pages: Array<{title: string, component: any}>;

	constructor(
		public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		public events: Events,
		public storage: Storage,
		public app: App,
	){
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'Server', component: ServerPage }
		];

		this.events.subscribe('menu:update', pages => {
			this.pages = pages;
		});

		this.events.subscribe('root:set', root => {
			this.nav.setRoot(root);
		});

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleBlackTranslucent();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		if(page.component){
			this.nav.setRoot(page.component);
		} else {
			if(page.action == "logout"){
				this.storage.remove("user");
				this.pages = [
					{ title: 'Home', component: HomePage },
					{ title: 'Server', component: ServerPage }
				];
				this.events.publish('root:set', HomePage);
			}
		}
	}
}
