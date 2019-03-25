import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-event",
  templateUrl: "event.html"
})
export class EventPage {
  showEventList: string = "block";
  showDetailrow: string = "none";
  showEventDetail: string = "none";
  selectedEvent: number;
  events: any;
  eventDetails: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fireDb: AngularFireDatabase
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EventPage");
    this.fireDb
      .list("events/")
      .valueChanges()
      .subscribe(
        data => {
          this.events = data;
        },
        err => {
          console.log("probleme : ", err);
        }
      );
    const itemsRef = this.fireDb.list("events");
  }
  back() {
    this.navCtrl.pop();
  }

  itemSelected(index) {
    this.selectedEvent = index;
    console.log(index);
    if (this.showDetailrow == "none") {
      this.showDetailrow = "block";
    } else {
      this.showDetailrow = "none";
    }
  }

  getEventDetail(data) {
    this.eventDetails = data;
    this.showEventList = "none";
    this.showEventDetail = "block";
  }
}
