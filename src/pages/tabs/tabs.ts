import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'HomePage';
  newsRoot = 'NewsPage';
  jijRoot = 'JijPage';
  subscribeRoot = 'SubscribePage';
  notificationRoot = 'NotificationPage';
  myIndex: number;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.myIndex = navParams.data.tabIndex || 0;
  }

  }
