import { MyUsers } from 'src/app/data/rooms.data';
import { Injectable, Inject } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyHelperService {

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private http: HttpClient,private db:AngularFirestore
  ) { }


  getEvents(){
    return this.db.firestore.collection('MyEvents').get();
  }

  getUsers(){
    return this.db.firestore.collection('MyUsers').get();
  }

  getRooms(){
    return this.db.firestore.collection('MyRooms').get();
  }
  getUserById(id:number){
    // this.myHelper.getUsersCalendar().subscribe((result:any)=>{
    //   let userToReturn = result.filter(x => x.id == id);

    //   return userToReturn[0].name;

    // })
    return this.db.collection('MyUsers',ref => ref.where('id', '==', id)).valueChanges();

  }


  getEventsFromLocal(): any {
    //Get events from database
    let events = [];
    this.getEvents()
    .then(result => {
      result.docs.forEach(doc=> {
        doc.data().start = new Date(doc.data().start)
        doc.data().end = new Date(doc.data().end)
        events.push(doc.data());
    })
  })
  //console.log(events);
  ////console.log("SERVICE DATABASE EVENTS", events)
  return events;
  }


  getUsersFromLocal(): any {
    //Get users from database
    let users = [];
    this.getUsers()
    .then(result => {
      result.docs.forEach(doc=> {
        doc.data().dob = new Date(doc.data().dob);
        users.push(doc.data());
    })
  })
  return users;
  }

  getUsersCalendar(){
    return this.db.collection('MyUsers').valueChanges();
  }
  getEventsFromCalendar(){
    return this.db.collection('MyEvents').valueChanges();
  }

  getRoomsFromLocal(): any {
    //Get users from database
    let rooms = [];
    this.getRooms()
    .then(result => {
      result.docs.forEach(doc=> {
        rooms.push(doc.data());
    })
  })
  return rooms;
  }

  saveEventToLocal(event: any) {
    if (event != undefined) {
      let events = this.getEventsFromLocal();
      events.push(event);
      this.storage.set('MyEvents', events);
    }
  }

  updateEventToLocalTrue(event:any,array){
    if (event != undefined) {
      let events = this.getEventsFromLocal();
      events.forEach(element => {
        if(element.title==event.title){
          element.truevotes=array
        }
        else{
          // events.push(element);
        }
      });
      this.storage.set('MyEvents', events);
    }
  }

  updateEventToLocalFalse(event:any,array){
    if (event != undefined) {
      let events = this.getEventsFromLocal();
      events.forEach(element => {
        if(element.title==event.title){
          element.falsevotes=array
        }
        else{
          // events.push(element);
        }
      });
      this.storage.set('MyEvents', events);
    }
  }

  saveUserToLocal(user: any) {
    if (user != undefined) {
      this.db.collection('MyUsers').add(user);
    }
  }

  getRandomUserId() {
    let latest_id: number = parseInt(localStorage.getItem("last_user_index"));
    let newNumber = latest_id + 1;
    localStorage.setItem("last_user_index", newNumber.toString());
    ////console.log(newNumber);
    return newNumber;
  }

  updateRoomToLocal(roomToSave: any) {
    if (roomToSave != undefined) {
      let rooms = this.getRoomsFromLocal();
      let index = rooms.findIndex(item => item.number === roomToSave.number);
      rooms.splice(index, 1, roomToSave);
      this.storage.set('MyRooms', rooms);
    }
  }

  getEventsOfRoom(roomNumber: number) {
    let allEvents =[];
    let eventsOfRoom = [];
    this.getEventsFromCalendar()
    .pipe(
      map((result:any)=>{
        //console.log(result);

        // result.forEach(elem=>{
        //   elem.start = new Date(elem.start)
        //   elem.end = new Date(elem.end)
        //   allEvents.push(elem)
        // })
        // allEvents.forEach(event => {
        //   if(event.meta.roomNumber.number===roomNumber){
        //     eventsOfRoom.push(event);
        //   }
        // });

        // return eventsOfRoom;
      })
    )
  }

  isUserInAnEvent(userId: number) {
    let allEvents = this.getEventsFromLocal();
    let userExistInEvent: boolean = false;
    allEvents.forEach(event => {
      event.meta.users.forEach(idToCheck => {
        ////console.log('Checking if '+ userId +' =? '+idToCheck);
        if (userId === idToCheck) {
          userExistInEvent = true;
          ////console.log('YES'+ userId +'='+idToCheck);
        }
      });
    });
    return userExistInEvent;
  }

  updateAllUsersOnLocal(users: any) {
    this.storage.set('MyUsers', users);
  }



  getRoomByNumber(roomNumber: any): any {
    let allRooms = this.getRoomsFromLocal();
    //console.log(allRooms);

    let roomToReturn = allRooms.filter(x => x.number == roomNumber);
    //console.log(roomToReturn[0])
    return roomToReturn[0];
  }


  getUserOfId(id: number): any {
    let allUsers = this.getUsersFromLocal();
    let userToReturn = allUsers.filter(x => x.id == id);
    return userToReturn[0];
  }

  deleteEvent(eventName: any) {
    ////console.log("AAA event to delete", eventName)
    let allEvents = this.getEventsFromLocal();
    allEvents.forEach(event => {
      if (event.title == eventName.title) {
        const index: number = allEvents.indexOf(event);
        if (index !== -1) {
          allEvents.splice(index, 1);
          this.storage.set('MyEvents', allEvents);
        } else {
          ////console.log("AAA No Event Found")
        }
      }
    });
  }

  getAvailableRooms() {
    let allRooms = this.getRoomsFromLocal();
    let notAvailableRooms = this.getNotAvailableRooms();
    notAvailableRooms.forEach(notAvailable => {
      allRooms.splice(allRooms.findIndex(v => v.number === notAvailable.number), 1);
    });
    allRooms.forEach(room => {
      room.available = true;
      this.updateRoomToLocal(room);

    });
    return allRooms;
  }
  getAvailableRoomsCalendar(){
    return this.db.collection('MyRooms',ref => ref.where('available', '==', true)).valueChanges();
  }

  getNotAvailableRooms() {
    let allRooms = this.getRoomsFromLocal();
    let allEvents = this.getEventsFromLocal();
    let notAvailableRooms = [];
    allEvents.forEach(event => {
      allRooms.forEach(room => {
        if (event.meta.roomNumber.number == room.number) {
          //Same room check if event is on going
          let now = new Date();
          if ((Date.parse(event.start) < Date.parse(now.toString())) && (Date.parse(event.end) > Date.parse(now.toString()))) {
            //Event is ongoing room not available
            if (notAvailableRooms.filter(x => x.number == room.number).length < 1) {
              //room not added earlier
              room.available = false;
              this.updateRoomToLocal(room);
              notAvailableRooms.push(room);
            }
          } else {
            //Event is not ongoing do nothing
          }
        }
      });
    });
    return notAvailableRooms;
  }

  getRandomUser(gender: string) {
    /**
     * https://randomuser.me/api/?inc=gender,name,picture,dob,id&noinfo&results=1&gender=male
     * Get random user through api, if failed, sent static random user
     */

    let user: any = [];
    this.http.get('https://randomuser.me/api/?inc=login,email,gender,name,picture,dob,id&noinfo&results=1&gender=male&nat=us')
      .subscribe((x: any) => {
        let result = x.results[0]
        ////console.log(result)
        user = {
          name: result.name.first + " " + result.name.last,
          username: result.login.username,
          email_address: result.login.password,
          image: result.picture.large,
          dob: result.dob.date,
          gender: this.titleCaseWord(gender)
        }
        ////console.log(user);
      },
        error => {
          ////console.log("getRandomUser:ERROR", error);
        }
      );
  }

  /**
   * Make the first letter of a string upper case
   */
  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
}
