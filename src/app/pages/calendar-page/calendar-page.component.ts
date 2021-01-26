import { Topic } from './../../blocks/interface/topic';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'angular-bootstrap-md';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyUsers } from 'src/app/data/rooms.data';
import { MyHelperService } from 'src/app/services/my-helper.service';
import { Upload } from 'src/app/services/shared/upload';
import { UploadService } from 'src/app/services/shared/upload.service';
import Swal from 'sweetalert2';
import { utils } from 'src/app/utils';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent {
  @ViewChild('myPond', { static: true }) myPond: any;
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @ViewChild('addNewModal', { static: true }) addNewModal: TemplateRef<any>;
  @ViewChild('newEventModal', { static: true }) newEventModal: ModalDirective;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  filenames: Array<any> = [];
  string: any = '';
  agenda: any = '';
  viewDate: Date = new Date();
  public url = 'https://us-central1-everteam-meeting.cloudfunctions.net';
  currentUpload: Upload;
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  recurrent: boolean = false

  topics: Topic[] = []

  data = [];
  settings = {
    columns: {
      id: {
        title: 'Topic'
      },
      name: {
        title: 'Duration'
      },
      responsible: {
        title: 'Responsible'
      }
    },
    attr: {
      class: 'table table-bordered'
    }
  };
  startingDate: any;
  endingDate: any;
  // Multiselect Users
  dropdownList_Users = [];
  dropdownList_Types = [];
  selectedItems_Users = [];
  selectedItems_Types = [];
  dropdownSettings_Users = {};
  dropdownSettings_Users_Single = {};
  dropdownSettings_Types = {};
  // Multiselect Rooms
  dropdownList_Rooms = [];
  selectedItems_Rooms = [];
  dropdownSettings_Rooms = {};

  filter = [];

  dropdownList_Filter = [
    {
      id: 1,
      name: "Gmail"
    },
    {
      id: 2,
      name: "Outlook"
    },
  ];
  dropdownSettings_filter = {};

  //event name
  eventName: string;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;

  constructor(
    public db: AngularFirestore,
    private modal: NgbModal,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private myHelper: MyHelperService,
    private router: Router,
    private upSvc: UploadService,
    private httpClient: HttpClient,
    private http: HttpClient
  ) {



  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    //console.log(action)
    //console.log(event)
    if (action == 'Clicked') {
      // Swal.fire(event.title,'Start: ' +event.start);
      this.router.navigateByUrl('event/' + event.title);
    }
  }
  uploadSingle(file) {
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload, this.eventName)
  }

  sendMail(body: any): any {
    const url = `${this.url}/sendMail`;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.httpClient.post(url, body, { headers })
      .pipe(map(res => {
        return res;
      })).toPromise();
  }

  saveevent(event) {
    this.eventName = event;
  }
  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  addEvent(): void {

    if (
      this.eventName != undefined &&
      this.eventName != '' &&
      this.selectedItems_Users != undefined &&
      this.selectedItems_Users.length > 0 &&
      this.selectedItems_Rooms != undefined &&
      this.selectedItems_Rooms.length > 0 &&
      // this.startingDate != undefined &&
      // this.startingDate > new Date() &&
      // this.endingDate != undefined &&
      this.endingDate > this.startingDate
    ) {
      let eventToSave = {
        start: new Date(this.startingDate).toISOString(),
        end: new Date(this.endingDate).toISOString(),
        title: this.eventName,
        topics: this.topics,
        truevotes: [],
        falsevotes: [],
        color: colors.red,
        // actions: this.actions,
        resizable: {
          beforeStart: true,
          afterEnd: true
        },
        draggable: false,
        meta: {
          roomNumber: this.selectedItems_Rooms[0],
          users: this.selectedItems_Users
        }
      };

      this.topics.forEach(user => {
        this.string += user.user[0].name + ',';
      })



      var curr_date = this.startingDate.getDate();
      var curr_month = this.startingDate.getMonth() + 1; //Months are zero based
      var curr_year = this.startingDate.getFullYear();
      var starttime = this.formatAMPM(this.startingDate)
      var startingdate = curr_year + "-" + curr_month + "-" + curr_date + " at " + starttime;

      var curr_date_end = this.endingDate.getDate();
      var curr_month_end = this.endingDate.getMonth() + 1; //Months are zero based
      var curr_year_end = this.endingDate.getFullYear();
      var endtime = this.formatAMPM(this.endingDate)
      var endingdate = curr_year_end + "-" + curr_month_end + "-" + curr_date_end + " at " + endtime;

      this.topics.forEach(agenda => {
        this.agenda += "Topic:" + agenda.topic + "-Duration:" + agenda.duration + "-Owner:" + agenda.user[0].name + '<br />';
      })


      const body = {
        email: "mazen.farah@intalio.com",
        event_name: this.eventName,
        event_start_date: startingdate,
        event_agenda: this.agenda,
        event_location: this.selectedItems_Rooms[0].name,
        event_invitees: this.string,
        event_end_date: endingdate
      }

      this.sendMail(body).then((res) => {
        console.log(res);
      });
      this.db.collection('MyEvents').doc(eventToSave.title).set(eventToSave);

      // this.myHelper.saveEventToLocal(eventToSave);
      this.events = this.myHelper.getEventsFromLocal();
      this.newEventModal.hide();
      this.startingDate = '';
      this.endingDate = '';
      this.eventName = '';
      this.filenames = [];
      this.selectedItems_Rooms = [];
      this.selectedItems_Users = [];
      this.topics = [];
      this.recurrent = false;

      Swal.fire('SUCCESS', 'Meeting added successfully.')

      this.myHelper.getEventsFromCalendar().subscribe((result: CalendarEvent[]) => {
        this.events = result;
        this.events.forEach(elem => {
          elem.start = new Date(elem.start)
          elem.end = new Date(elem.end)
        })

      })
    } else {
      // alert('Missing a Field')
      Swal.fire('Error', 'Missing a Field')
      if (this.endingDate < this.startingDate) {
        Swal.fire('Event cannot end before it starts')
      }
      let eventToSave = {
        start: this.startingDate,
        end: this.endingDate,
        title: this.eventName,
        color: colors.red,
        // actions: this.actions,
        allDay: false,
        resizable: {
          beforeStart: true,
          afterEnd: true
        },
        draggable: false,
        meta: {
          roomNumber: this.selectedItems_Rooms[0],
          users: this.selectedItems_Users
        }
      };
      //console.log("CALENDAR EVENT TO ADD ERROR", eventToSave)
    }
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  updatedDate() {
  }

  public onFilterChange(event) {
    var spanner = document.getElementById('spanner');
    spanner['classList'].add('show');

    var overlay = document.getElementById('overlay');
    overlay['classList'].add('show');

    setTimeout(() => {
      var spanner = document.getElementById('spanner');
      spanner['classList'].remove('show');

      var overlay = document.getElementById('overlay');
      overlay['classList'].remove('show');
    }, 2000);
  }
  //
  ngOnInit() {


    console.log(this.myHelper.getUsersFromLocal());

    this.dropdownList_Types = [
      { id: 1, type: 'Executive Committee' },
      { id: 2, type: 'Management Committee' },
      { id: 3, type: 'Thematic Committees' },
      { id: 4, type: 'Investments Committee' },
      { id: 5, type: 'Audit / Governance Committee' },
      { id: 6, type: 'Monitoring Committee / Program Contract' }

    ];
    this.dropdownList_Types = [
      { id: 1, type: 'Executive Committee' },
      { id: 2, type: 'Management Committee' },
      { id: 3, type: 'Thematic Committees' },
      { id: 4, type: 'Investments Committee' },
      { id: 5, type: 'Audit / Governance Committee' },
      { id: 6, type: 'Monitoring Committee / Program Contract' }

    ];
    // this.selectedItems = [MyUsers[0],MyUsers[2]];
    this.selectedItems_Users = [];
    this.selectedItems_Types = [];

    this.dropdownSettings_filter = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: false
    };

    this.dropdownSettings_Users_Single = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };

    this.dropdownSettings_Users = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownSettings_Types = {
      singleSelection: true,
      idField: 'id',
      textField: 'type',
      allowSearchFilter: true
    };

    // this.dropdownList_Users=MyUsers;
    // this.selectedItems = [MyUsers[0],MyUsers[2]];
    this.selectedItems_Rooms = [this.dropdownList_Rooms[0]];
    this.dropdownSettings_Rooms = {
      singleSelection: true,
      idField: 'number',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
    };
  }

  ngAfterViewInit(): void {
    this.myHelper.getAvailableRoomsCalendar().subscribe(result => {
      this.dropdownList_Rooms = result;
    })

    this.myHelper.getUsersCalendar().subscribe(result => {

      this.dropdownList_Users = result;

      this.dropdownList_Users.forEach(elem => {
        elem.dob = new Date(elem.dob);
      })

    })

    this.myHelper.getEventsFromCalendar().subscribe((result: CalendarEvent[]) => {
      this.events = result;
      this.events.forEach(elem => {
        elem.start = new Date(elem.start)
        elem.end = new Date(elem.end)
      })

    })

    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }


  onItemSelectUser(item: any) {
    console.log(item)
  }

  onItemSelectType(item: any) {

    if (item.id === 1) {
      this.selectedItems_Users = [
        MyUsers[0], MyUsers[1], MyUsers[2], MyUsers[3], MyUsers[4]
      ]


    }
    else {
      this.selectedItems_Users.push(MyUsers[item.id]);
    }
    //console.log(item);
    // if (item.id === 1 || item.id === 4 || item.id === 10) {
    //   const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top-end',
    //     showConfirmButton: false,
    //     timer: 5000
    //   });
    //   Toast.fire({
    //     type: 'error',
    //     title: 'Alert! ' + item.name + ' is already busy with another event'
    //   })
    //console.log("Selected Users", this.selectedItems_Users);
  }
  onSelectAllType(items: any) {
    //console.log(items);
  }
  onSelectAllUser(items: any) {
    //console.log(items);
  }
  pondOptions = {
    multiple: true,
    labelIdle: 'Drop files here...',
    instantUpload: false,
    // fake server to simulate loading a 'local' server file and processing a file
    server: {
      process: (fieldName, file, metadata, load) => {
        // simulates uploading a file
        const formData = new FormData();
        formData.append('file', file);
        // console.log(formData);
        this.uploadSingle(file)
        // this.http.post<any>('http://localhost:3000/file', formData).subscribe(
        //   (res) => console.log(res),
        //   (err) => console.log(err)
        // );
        this.filenames.push(file.name);
        setTimeout(() => {
          load(Date.now())
        }, 1500);
      },
      load: (source, load) => {
        // simulates loading a file from the server
        fetch(source).then(res => res.blob()).then(load);
      }
    }
  }

  pondOptions_topics = {
    multiple: false,
    labelIdle: 'Drop file',
    instantUpload: false,
    // fake server to simulate loading a 'local' server file and processing a file
    server: {
      process: (fieldName, file, metadata, load) => {
      },
      load: (source, load) => {
        // simulates loading a file from the server
        fetch(source).then(res => res.blob()).then(load);
      }
    }
  }


  pondFile_topics = []

  removeTopic(i) {
    this.topics.splice(i, 1)
  }

  newTopic() {
    this.topics.push({
      id: utils.GenerateObjectId(),
      user: [],
      completed: false,
      duration: 5,
      topic: '',
      votes_up: [
        { id: 435, name: 'Yahya' },
        { id: 765, name: 'Mazen' }
      ],
      votes_down: [
        { id: 653, name: 'Hassan' }
      ],
      votes_enabled: true,
    })
  }

  pondFiles = [
    // {
    //   source: 'assets/photo.jpeg',
    //   options: {
    //     type: 'local'
    //   }
    // }
  ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);

  }

}


