import { Component } from '@angular/core';
import { NavController, AlertController, ViewController, Events, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import { Logged } from '../logged/logged'
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	serverIP: string;
	email: string;
	password: string;

	constructor(
		public navCtrl: NavController,
		public storage: Storage,
		public http: Http,
		public alertCtrl: AlertController,
		public viewCtrl: ViewController,
		public events: Events,
		public app: App
	){
		this.storage.ready().then(() => {
			this.storage.get('server').then((val) => {
				this.serverIP = val;
			});
			this.storage.get('user').then((val) => {
				if(val){
					this.events.publish('menu:update', [
						{ title: 'Home', component: Logged },
						{ title: 'Logout', action: "logout" }
					]);
					this.events.publish('root:set', Logged);
				}
			});
		});
	}

	signIn(){
		let alertError = this.alertCtrl.create({
			title: 'Error',
			subTitle: 'e-mail or password wrong, try again!',
			buttons: ['OK']
		});

		let alertFreel = this.alertCtrl.create({
			title: 'Error',
			subTitle: 'You don\'t have any freelancer linked to your account!',
			buttons: ['OK']
		});
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let data = {
			"email": this.email,
			"password": this.password
		}
		this.http.post('http://'+ this.serverIP + '/api/passport/login', data, {"headers": headers})
		.map(res=>res.json())
		.subscribe( (data) => {
			if(data.result != "success"){
				alertError.present();
			} else {
				if(data.user.freeLancerId){
					this.storage.set("user",data.user);
					this.events.publish('menu:update', [
						{ title: 'Home', component: Logged },
						{ title: 'Logout', action: "logout" }
					]);
					this.events.publish('root:set', Logged);
				} else {
					alertFreel.present();
				}
			}
		});
	}
}
