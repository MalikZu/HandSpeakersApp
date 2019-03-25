import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-news",
  templateUrl: "news.html"
})
export class NewsPage {
  news: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: DataProvider
  ) {}

  ionViewDidLoad() {
    this.data.getNews().subscribe(data => {
      this.news = data;
    });
  }
  back() {
    this.navCtrl.pop();
  }

  openNews(news) {
    window.open(news.link, "_system", "location=yes");
    return false;
  }
}
