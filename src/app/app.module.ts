import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { WorkshopPage } from "../pages/workshop/workshop";
import { VolunteerPage } from "../pages/volunteer/volunteer";
import { ContactPage } from "../pages/contact/contact";
import { EventPage } from "../pages/event/event";
import { ASLPage } from "../pages/asl/asl";
import { NewsPage } from "../pages/news/news";
import { MediaPage } from "../pages/media/media";
import { JobsPage } from "../pages/jobs/jobs";
import { MembershipPage } from "../pages/membership/membership";
// import { TablesPage } from '../pages/tables/tables';

import { DataProvider } from "../providers/data/data";

let config = {
  apiKey: "AIzaSyB8E5Qvsrg9sPthtrElTTmvdAMowkiK_zE",
  authDomain: "signlanguageapp.firebaseapp.com",
  databaseURL: "https://signlanguageapp.firebaseio.com",
  projectId: "signlanguageapp",
  storageBucket: "signlanguageapp.appspot.com",
  messagingSenderId: "417208766589"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventPage,
    ASLPage,
    VolunteerPage,
    ContactPage,
    WorkshopPage,
    NewsPage,
    MediaPage,
    JobsPage,
    MembershipPage
    // TablesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventPage,
    ASLPage,
    VolunteerPage,
    ContactPage,
    WorkshopPage,
    NewsPage,
    MediaPage,
    JobsPage,
    MembershipPage
    // TablesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider
  ]
})
export class AppModule {}
