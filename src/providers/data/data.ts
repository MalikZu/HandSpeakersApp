import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataProvider {
  private newsObs = new Subject();
  newsList = this.newsObs.asObservable();
  
  constructor(public http: Http, private db: AngularFireDatabase) {
  }

  getNews(): Observable<{}> {
    this.db.list('news-items').valueChanges().subscribe((data) => { 
      this.newsObs.next(data);
    },(err)=>{
       console.log("probleme : ", err)
    });
    return this.newsList;
  }
}
