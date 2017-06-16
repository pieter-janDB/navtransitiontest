import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) {

  }
	test(){
	  	let options = {
	        "duration"  : 500,
	        "androiddelay" : 0,
	        "iosdelay"  : 0
	    };
	    this.nativePageTransitions.fade(options);
	    this.navCtrl.push(ListPage);
	}
}
