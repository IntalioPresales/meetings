import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MyRooms, MyUsers, MyEvents } from './data/rooms.data'
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MyHelperService } from './services/my-helper.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  roomsarray:any[]=[];
  usersarry:any[]=[];

  constructor(private myHelper: MyHelperService,private db:AngularFirestore,@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit(): void {
    // Call our async function in a try block to catch connection errors.

    // this.myHelper.getEventsFromLocalTest().then(value => {
    //   console.log(value);

    // });

    // this.myHelper.getEventsFromCalendar()
    // .pipe(
    //   map((result:any)=>{
    //     console.log(result);
    //   })
    // )
    if (this.storage.get('MyRooms') != undefined) {
      // this.roomsarray=this.storage.get('MyRooms')
      // this.roomsarray.forEach(element => {
      //   // this.db.collection('MyRooms').doc(element.name).set(element);
      //   console.log(element);

      // })
      // Data Found
      // console.log("AppComponent ROOMS", this.storage.get('MyRooms'))
    } else {

      // No Data
      this.storage.set('MyRooms', MyRooms);
    }

    if (this.storage.get('MyUsers') != undefined) {
      // this.usersarry=this.storage.get('MyUsers')
      // this.usersarry.forEach(element => {
      //   // this.db.collection('MyUsers').add(element);
      //   console.log(element);

      // })
      // Data Found
      // console.log("AppComponent USERS", MyUsers)
    } else {
      // No Data
      this.storage.set('MyUsers', MyUsers);
      this.storage.set('last_user_index',20);
    }

    if (this.storage.get('MyEvents') != undefined) {
      // Data Found
      // let events = JSON.parse(this.storage.get('MyEvents'))
      let events = this.storage.get('MyEvents')
      // events.forEach(element => {
      //   // this.db.collection('MyEvents').add(element);
      //   console.log(element);

      // })
      // console.log("AppComponent EVENTS", events)
    } else {
      // No Data
      // let events = MyEvents;
      // console.log("MYEVENTS",events);
      // let myEvents:string = JSON.stringify(MyEvents);
      this.storage.set('MyEvents', MyEvents);
    }
  }


}
