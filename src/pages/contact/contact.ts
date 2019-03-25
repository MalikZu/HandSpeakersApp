import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contactUs: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fireDb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    this.fireDb.list('contact-us/').valueChanges().subscribe((data) => { 
      this.contactUs = data[0];
    },(err)=>{
       console.log("probleme : ", err)
    });
  }
  back() {
    this.navCtrl.pop();
  }
}
