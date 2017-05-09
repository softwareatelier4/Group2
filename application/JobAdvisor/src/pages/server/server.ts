import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-server',
  templateUrl: 'server.html'
})
export class ServerPage {

  serverText : string;
  constructor(
    public navCtrl: NavController,
    public storage: Storage
  ) {
    this.storage.ready().then(() => {
      this.storage.get('server').then((val) => {
        if(val){
          this.serverText = val;
        }
      })
    });
  }

  setServer() {
    this.storage.set('server',this.serverText);
  }

}
