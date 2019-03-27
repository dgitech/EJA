import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ToastController } from 'ionic-angular';



export interface PageInterface {
title: string;
pageName: string;
tabComponement?: any;
index?: number;
icon: string;

}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage ='HomePage';


  @ViewChild(Nav) nav: Nav;
   pages: PageInterface [] = [
       { title: 'Accueil', pageName: 'HomePage', tabComponement: 'HomePage', index: 0, icon: 'home'},
       { title: 'JIJ', pageName: 'JijPage', tabComponement: 'JijPage', index: 1, icon: 'pie'},
       { title: 'Actualités', pageName: 'NewsPage', tabComponement: 'NewsPage', index: 2, icon: 'paper'},
       { title: 'Adhésion', pageName: 'SubscribePage', tabComponement: 'SubscribePage', index: 3, icon: 'checkmark-circle'},
       { title: 'Notification', pageName: 'NotificationPage', tabComponement: 'NotificationPage', index: 4, icon: 'notifications'},
       { title: 'Programme', pageName: 'AgendaPage', icon: 'calendar'},
       { title: 'Articles', pageName: 'ArticlesPage', icon: 'list-box' },
       { title: 'Informations', pageName: 'InformationsPage', icon: 'information-circle' },
       { title: 'CGU', pageName: 'CguPage', icon: 'help' },



   ];

   constructor(public toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad Dashboard');
   }
   openPage(page: PageInterface) {
     let params = {};
     if (page.index) {
       params = { pageIndex: page.index};
     }

     if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
         this.nav.getActiveChildNavs()[0].select(page.index);
     } else {
       this.nav.setRoot(page.pageName, params);

     }

 }
 isActive(page: PageInterface) {
   let childNav = this.nav.getActiveChildNavs()[0];

   if (childNav) {
     if (childNav.getSelected() && childNav.getSelected().root === page.tabComponement)
       return 'primary';
   }

 return;
 }
 }
