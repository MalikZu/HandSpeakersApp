import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the MembershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-membership',
  templateUrl: 'membership.html',
})
export class MembershipPage {


  showSpeaker:string="none";
  showMember:string="none";
  showSponsor:string="none";
  showMembershipForm:string="block";
  showSponsorOtherField:string="none";
  showMemberOtherField:string="none";

  sponsor_other:boolean;
  member_other:boolean;
  currentDate: string = new Date().toLocaleDateString();
  // formSponsor: FormGroup;
  formSpeaker: any = {
    name: '',
    phone: '',
    email: ''
  };
  formMember: any = {
    name: '',
    phone: '',
    email: '',
    volunteer: false,
    prizes: false,
    photographer: false,
    videographer: false,
    interpreter: false,
    other: false
  };
  formSponsor: any = {
    type:'',
    name: '',
    phone: '',
    email: '',
    targaryen: false,
    prizes: false,
    venue: false,
    money: false,
    other: false,
    explain: ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fireDb: AngularFireDatabase,
    // private formBuilder: FormBuilder
    ) {
      // this.formSponsor = this.formBuilder.group({
      //   company: [false, Validators.required],
      //   individual: [false, Validators.required],
      //   name: ['', Validators.required],
      //   phone: ['', Validators.required],
      //   email: [''],
      // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembershipPage');
  }
  back() {
    this.navCtrl.pop();
  }

  JoinAsSponsor(){

   this.showMembershipForm="none";
   this.showSponsor="block";
  }
  JoinAsMember(){
    this.showMembershipForm="none";
    this.showMember="block";
  }
  JoinAsSpeaker(){

    this.showMembershipForm="none";
    this.showSpeaker="block";
  }

  eventSponsorOtherField(){
    if(this.sponsor_other==true){
      this.showSponsorOtherField="block";
    }
    else{
      this.showSponsorOtherField="none";
    }
    
  }

  eventMemberOtherField(){

    if(this.member_other==true){
      this.showMemberOtherField="block";
    }
    else{
      
      this.showMemberOtherField="none";
    }
    
  }

  submitMember(){
  }
  submitSponsorForm(){
    const itemsRef = this.fireDb.list('Sponsor-application');    
    if( itemsRef.push({
      "type": this.formSponsor.type,
      "name": this.formSponsor.name,
      "email": this.formSponsor.email,
      "phone": this.formSponsor.phone,
      "targaryen": this.formSponsor.targaryen,
      "prizes": this.formSponsor.prizes,
      "photographer": this.formSponsor.venue,
      "videographer": this.formSponsor.money,
      "other": this.formSponsor.other,
      "explain": this.formSponsor.explain,
      "appliedOn": this.currentDate
      }
    ).key !== undefined ) {
      this.formSponsor = {
        type: '',
        name: '',
        phone: '',
        email: '',
        targaryen: false,
        prizes: false,
        venue: false,
        money: false,
        other: false,
        explain: ''
      };
      
      this.showSpeaker="none";
      this.showMember="none";
      this.showSponsor="none";
      this.showMembershipForm="block";
      this.showSponsorOtherField="none";
      this.showMemberOtherField="none";
  
      alert("Thanks to Join as Sponsor");
    } else {
      alert("Please retry!");
    }
    
  }
  submitMemberForm(){
    const itemsRef = this.fireDb.list('Membership-application');    
    if( itemsRef.push({
      "name": this.formMember.name,
      "email": this.formMember.email,
      "phone": this.formMember.phone,
      "volunteer": this.formMember.volunteer,
      "prizes": this.formMember.prizes,
      "photographer": this.formMember.photographer,
      "videographer": this.formMember.videographer,
      "interpreter": this.formMember.interpreter,
      "other": this.formMember.other,
      "appliedOn": this.currentDate
      }
    ).key !== undefined ) {
      this.formMember = {
        name: '',
        phone: '',
        email: '',
        volunteer: false,
        prizes: false,
        photographer: false,
        videographer: false,
        interpreter: false,
        other: false
      };
      
      this.showSpeaker="none";
      this.showMember="none";
      this.showSponsor="none";
      this.showMembershipForm="block";
      this.showSponsorOtherField="none";
      this.showMemberOtherField="none";
  
      alert("Thanks to Join as Member");
    } else {
      alert("Please retry!");      
    }
    
  }

  submitSpeakerForm(){
    const itemsRef = this.fireDb.list('Speaker-application');    
    if ( itemsRef.push({
      "name": this.formSpeaker.name,
      "email": this.formSpeaker.email,
      "phone": this.formSpeaker.phone,
      "appliedOn": this.currentDate
      }
    ).key !== undefined ) {
      this.formSpeaker = {
        name: '',
        phone: '',
        email: ''
      };
      this.showSpeaker="none";
      this.showMember="none";
      this.showSponsor="none";
      this.showMembershipForm="block";
      this.showSponsorOtherField="none";
      this.showMemberOtherField="none";
  
      alert("Thanks to Join as Speaker");
    } else {
      alert("Please retry!");
    }   
  }
  
}
