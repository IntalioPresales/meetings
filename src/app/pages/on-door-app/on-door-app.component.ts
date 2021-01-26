import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { interval, Subscription } from 'rxjs';
import { MyHelperService } from 'src/app/services/my-helper.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-on-door-app',
  templateUrl: './on-door-app.component.html',
  styleUrls: ['./on-door-app.component.css']
})
export class OnDoorAppComponent implements OnInit {

  //Screen Size
  public innerWidth: any;

  //Date
  currentTime: Date = new Date();
  subscription: Subscription;
  username:any;
  rooms:any[]=[];
  eventsofrooms:any[]=[];
  //emit value in sequence every 10 second
  source = interval(1000);
  text = 'Your Text Here';

  //Room
  currentRoom: any;
  roomEvents:any[]=[];
  upcomingEvents:any=[];
  roomNumber:any;
  constructor(
    private myHelper: MyHelperService,
    private route: ActivatedRoute,

    ) { }

  ngOnInit() {
    //Screen Size
    this.innerWidth = window.innerWidth;
    //console.log("INNER WIDTH",this.innerWidth)
    //Date
    this.subscription = this.source.subscribe(val => {
      this.currentTime = new Date();
    });

    this.route.paramMap.subscribe(params => {
      this.roomNumber=params.get('id');

      // this.currentRoom = this.myHelper.getRoomByNumber(roomNumber);
      this.myHelper.getAvailableRoomsCalendar().subscribe(result=>{
        this.rooms=result;
        let roomToReturn = this.rooms.filter(x => x.number == this.roomNumber);
        this.currentRoom=roomToReturn[0];
        let allEvents=[];
        this.myHelper.getEventsFromCalendar().subscribe((result:any)=>{
          result.forEach(elem=>{
            elem.start = new Date(elem.start)
            elem.end = new Date(elem.end)
            allEvents.push(elem)
          })
          // allEvents.forEach(event => {
          //   if(event.meta.roomNumber.number===this.roomNumber){
          //     this.roomEvents.push(event);
          //   }
          // });

         this.roomEvents= allEvents.filter(x => x.meta.roomNumber.number == this.roomNumber);
         this.roomEvents.forEach(event => {
          if(event.start>this.currentTime){
            this.upcomingEvents.push(event);
          }
        });
        })
        // this.roomEvents = this.myHelper.getEventsOfRoom(this.currentRoom.number);
        // console.log(this.roomEvents);
        })
      //console.log("Current Room",this.currentRoom)
    });

  }

  ngOnDestroy() {
    //Date
    this.subscription.unsubscribe();
  }

  goHome(){

  }
  ngAfterViewInit(): void {


    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  getUserByIdTs(id:number){
    this.myHelper.getUserById(id).subscribe((res:any)=>{

     this.username= res[0].name;

    });
  }

  requestCleaning(){
    Swal.fire('Scheduled','Cleaning request has been scheduled automatically','success')
  }




}
