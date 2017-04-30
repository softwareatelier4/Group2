import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http} from '@angular/http';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	myStorage: Storage;
	serverIP: string;
	username: string;
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
		var request = {
			method: "post",
			url: this.serverIP+"/api/passport/login",
			data: {
				username: this.username,
				password: this.password
			},
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		};
		/*Successful HTTP post request or not */
		// this.http.post(request.url,request.data,null).then(function (response){
		// 	console.log(response);
		// });
	}
}
