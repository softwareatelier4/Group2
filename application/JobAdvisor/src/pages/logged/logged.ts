import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { LocationTracker } from '../../providers/location-tracker';
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
  user: any = {
    freelancerid: 0,
    firstName: "",
    lastName: ""
  };
  serverIP: string;
  emergency: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public http: Http,
    public locationTracker: LocationTracker
  ){}

  ionViewDidLoad() {
    this.storage.ready().then(() => {
			this.storage.get('user').then((val) => {
        this.user = val;
        this.storage.get('server').then((val) => {
          this.serverIP = val;
          this.http.get("http://" + val + "/api/freelancer/emergency/"+this.user.freeLancerId).map(res=>res.json()).subscribe(data=>{
            if(data == true){
              this.locationTracker.startTracking("http://" + val + "/api/freelancer/location/"+this.user.freeLancerId);
            } else {
              this.locationTracker.stopTracking();
            }
            this.emergency = data;
          });
        });
			});
		});
  }

  updateEmergency(){
    let body = {
      emergency: this.emergency
    }
	  this.http.put("http://" + this.serverIP + "/api/freelancer/emergency/"+this.user.freeLancerId, body).map(res=>res.json()).subscribe(data=>{
      if(data == true){
        this.locationTracker.startTracking("http://" + this.serverIP + "/api/freelancer/location/"+this.user.freeLancerId);
      } else {
        this.locationTracker.stopTracking();
      }
      this.emergency = data;
    });
  }
}
