import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the JobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {

  showJobList:string="block";
  showJobDetail:string="none";
  showDetailandCv:string="none";
  jobsList: any;
  jobDetails: any;
  appliedJob: any;
  formJob: any = {
    name: '',
    email: '',
    phone: ''
  };
  currentDate: string = new Date().toLocaleDateString();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private fireDb: AngularFireDatabase
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobsPage');
    this.fireDb.list('jobs/').valueChanges().subscribe((data) => { 
      this.jobsList = data;
    },(err)=>{
       console.log("probleme : ", err)
    });
    // const itemsRef = this.fireDb.list('jobs');    
    // itemsRef.update('-LQ8pmmA_veU_YweSKfJ', {
    //   "email":"info@dubai-esl-center.ae",
    // });
    // let ref = itemsRef.push({
    //   "eid": "018-jobs-2",
    //   "title": "Department Head",
    //   "description": "The purpose of this role is to share the responsibility for planning and organizing the department Activities, teaching and assessments of the staffs assigned that guides and encourages students to develop and fulfill their academic potential.",
    //   "department": "Primary",
    //   "education": "B ed / M ed",
    //   "experience": "2Year UAE Experience as Teacher",
    //   "school": "King ESL Center",
    //   "location": "Shabia, Abudhabi",
    //   "pay": "AED 40K - 80K/Year",
    //   "status":"Open"
    //   }
    //   );
    //   let id= ref.key;

  }
  back() {
    this.navCtrl.pop();
  }

  onJobClicked(data){
    this.jobDetails = data;
    this.showJobList="none";
    this.showJobDetail="block";
  }

  applyForJob(data){
    this.appliedJob = data;
    this.showDetailandCv="block";
    this.showJobDetail="none";
  } 

  submitApplication(formJob){
    const itemsRef = this.fireDb.list('job-application');    
    if ( itemsRef.push({
      "name": this.formJob.name,
      "email": this.formJob.email,
      "phone": this.formJob.phone,
      "job": this.appliedJob.title,
      "department": this.appliedJob.department,
      "appliedOn": this.currentDate
      }
    ).key !== undefined ) {
      this.formJob = {
        name:'',
        email:'',
        phone:'',
      };
      this.showJobList = "block";
      this.showJobDetail = "none";
      this.showDetailandCv = "none";
      alert("Successfully submitted")
    } else {
      alert("Please retry!");
    }
  }
}
