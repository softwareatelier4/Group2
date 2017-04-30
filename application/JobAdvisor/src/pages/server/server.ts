import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-server',
  templateUrl: 'server.html'
})
export class ServerPage {

  serverText : string;
  myStorage: Storage;
  constructor(public navCtrl: NavController, storage: Storage ) {
    this.myStorage = storage;
    this.myStorage.ready().then(() => {
      this.myStorage.get('server').then((val) => {
        if(val){
          this.serverText = val;
        }
      })
    });
  }

  setServer() {
    this.myStorage.set('server',this.serverText);
  }

}
