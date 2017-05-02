import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
/**
* Generated class for the Logged page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-logged',
  templateUrl: 'logged.html',
})
export class Logged {
  user: Object = {
    firstName: "",
    lastName: ""
  };
  serverIP: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public http: Http
  ){
    this.storage.ready().then(() => {
			this.storage.get('user').then((val) => {
        this.user = val;
        console.log(val);
			});
		});
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad Logged');

  }

}
