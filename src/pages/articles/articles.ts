import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/news.service';

/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {


  news1Url = "https://dev-labs.000webhostapp.com/api/v1/news";
  //news1Url = "../api/v1/news";
  news = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loader: LoadingController,
    public newsService: NewsService
  ) {
  }
  openUrl(url) {
    window.open(url, '_system', 'location=yes');
  }
  createLoader() {
    return this.loader.create({
      spinner: 'hide',
      content: `Loading Please Wait...`,
      duration: 20000
    });
  }

  ionViewDidLoad() {
    let loading = this.createLoader();
    loading.present();
    this.newsService.getNews(this.news1Url).subscribe(res => {
      this.news = res.data.wordpress
      //this.news = this.news.concat(res.data.wordpress);
      this.news = this.news.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      this.news.forEach(nws => {
        nws.text = nws.text.replace(/&\w+;\s*/g, ' ')
      })
      loading.dismiss();
    });
  }
}
