import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkshopPage } from '../workshop/workshop';
import { VolunteerPage } from '../volunteer/volunteer';
import { ContactPage } from '../contact/contact';
import { EventPage } from '../event/event';
import { ASLPage } from '../asl/asl';
import { NewsPage } from '../news/news';
import { MediaPage } from '../media/media';
import { JobsPage } from '../jobs/jobs';
import { MembershipPage } from '../membership/membership';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onEvent() {
    this.navCtrl.push(EventPage);
  }
  onWorkshop() {
    this.navCtrl.push(WorkshopPage);
  }
  onASL() {
    this.navCtrl.push(ASLPage);
  }
  onVolunteer() {
    this.navCtrl.push(VolunteerPage);
  }
  onNews() {
    this.navCtrl.push(NewsPage);
  }
  onMedia() {
    this.navCtrl.push(MediaPage);
  }
  onJobs() {
    this.navCtrl.push(JobsPage);
  }
  onMembership() {
    this.navCtrl.push(MembershipPage);
  }
  onContact() {
    this.navCtrl.push(ContactPage);
  }
}
