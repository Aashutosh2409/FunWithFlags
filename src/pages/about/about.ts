import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private vibration: Vibration, private app: AppVersion) {

  }

  vibrate() {
  this.vibration.vibrate(9000);
}

   getName(){
const appName =  this.app.getAppName();
console.log(appName);
  }
   getPackage(){
const appPack = this.app.getPackageName();
console.log(appPack);

  }
   getVersion(){
const appVersion =this.app.getVersionNumber();
console.log(appVersion);
  }
  async getVCode(){
const appVC =await this.app.getVersionCode();
console.log(appVC);
  }

}
