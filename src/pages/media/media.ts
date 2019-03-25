import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the MediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {

  showVideos:string="none";
  showmedia:string="block";
  mediaList: any;
  files: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fireDb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
    this.fireDb.list('media/').valueChanges().subscribe((data) => { 
      this.mediaList = data;
    },(err)=>{
       console.log("probleme : ", err)
    });

  }
  back() {
    this.navCtrl.pop();
  }

  media_event(data){
    this.files = data;
    this.showmedia="none";
    this.showVideos="block";
  }
}
