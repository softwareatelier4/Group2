import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	myStorage: Storage;
	serverIP: string;
	email: string;
	password: string;
	http: Http;

	constructor(public navCtrl: NavController, storage: Storage, http: Http) {
		this.http = http;
		this.myStorage = storage;
		this.myStorage.ready().then(() => {
			this.myStorage.get('server').then((val) => {
				this.serverIP = val;
			});
		});
	}

	signIn(){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let data = {
			"email": this.email,
			"password": this.password
		}
		this.http.post('http://'+ this.serverIP + '/api/passport/login', data, {"headers": headers})
		.map(res=>res.json())
		.subscribe(function(data){
			console.log(data);
		});
	}
}
