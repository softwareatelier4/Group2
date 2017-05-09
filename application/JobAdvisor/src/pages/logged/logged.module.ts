import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Logged } from './logged';

@NgModule({
  declarations: [
    Logged,
  ],
  imports: [
    IonicPageModule.forChild(Logged),
  ],
  exports: [
    Logged
  ]
})
export class LoggedModule {}
