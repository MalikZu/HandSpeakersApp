import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-asl',
  templateUrl: 'asl.html',
})
export class ASLPage {
  showEmirateCenters:string="block";
  showInstitutes:string="none";
  showInstituteDetail:string="none";
  
  emirates: any;
  institutes: any;
  institute: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private fireDb: AngularFireDatabase
    ) {
  }

  ionViewDidLoad() {
    this.fireDb.list('asl-centers/').valueChanges().subscribe((data) => { 
      this.emirates = data;
    },(err)=>{
       console.log("probleme : ", err)
    });
  }
  back() {
    this.navCtrl.pop();
  }

  EmirateCentersSelected(data){
    this.institutes = data;
    this.showEmirateCenters="none";
    this.showInstitutes="block";
  }

  InstituesSelected(data){
    this.institute = data;
    this.showInstituteDetail="block";
    this.showInstitutes="none";

  }
}
