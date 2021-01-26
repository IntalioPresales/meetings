import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatComponent } from 'src/app/blocks/reusable-components/chat/chat.component';
import { Topic } from 'src/app/blocks/interface/topic';
import { ActivatedRoute, Router } from '@angular/router';
import { MyHelperService } from 'src/app/services/my-helper.service';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  @ViewChild('chat', { static: false }) chatComponent: ChatComponent;
  myEvent: any;
  closeResult = '';
  public backgroundimage = "../../../assets/img/5812.jpg";
  public pptimage = "~/assets/img/ppt.png";
  room: any;
  users: any[] = [];
  totalUsersToAdd: any[] = [];
  now: any = new Date();
  topics: Topic[] = []
  rate = 4;
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
        title: 'Owner'
      }
    },
    attr: {
      class: 'table table-bordered'
    },
    hideSubHeader: true
  };
  constructor(
    private route: ActivatedRoute,
    private myHelper: MyHelperService,
    private http: HttpClient,
    private router: Router,
    private db: AngularFirestore,
    private modalService: NgbModal
  ) { }

  ngOnInit() {


    // // Chat Sidebar
    // var menuRight = document.getElementById('cbp-spmenu-s1'),
    //   showRight = document.getElementById('showRight'),
    //   closeRight = document.getElementById('closeRight'),
    //   menuRight2 = document.getElementById('cbp-spmenu-s2'),
    //   closeRight2 = document.getElementById('closeRight2'),
    //   body = document.body;

    // showRight.onclick = function () {
    //   // classie.toggle(menuRight, 'cbp-spmenu-open');
    // };

    this.route.paramMap.subscribe(params => {
      let allEvents = [];
      this.myHelper.getEventsFromCalendar().subscribe((result: any) => {

        console.log(result)

        result.forEach(elem => {
          elem.start = new Date(elem.start)
          elem.end = new Date(elem.end)
          allEvents.push(elem)
        })
        allEvents.forEach(event => {
          if (event.title == params.get('id')) {
            this.myEvent = event;
            this.data = this.myEvent.data;
            this.topics = this.myEvent.topics;
            this.myHelper.getAvailableRoomsCalendar().subscribe(result => {
              let roomToReturn = result.filter((x: any) => x.number == this.myEvent.meta.roomNumber.number);
              this.room = roomToReturn[0];
            })

            // this.room = this.myHelper.getRoomByNumber();
            //console.log("ROOM", this.room);
          }
        });
        this.myEvent.meta.users.forEach(user => {
          let userToPush;
          this.myHelper.getUserById(user.id).subscribe((res: any) => {

            userToPush = res[0];
            userToPush.voted = user.voted;
            console.log(userToPush);

            this.totalUsersToAdd.push(userToPush);
            // this.http.get('https://randomuser.me/api/?inc=name,location,nat,picture')
            //   .subscribe((x: any) => {
            //     // //console.log("IMAGE", x)
            //     // //console.log("URL", x.results[0].picture.large)
            //     user.image = x.results[0].picture.large
            //     this.users.push(user);
            //   },
            //     error => {
            //       //console.log("IMAGE ERROR", error);
            //       this.users.push(user)
            //     });
            // user.image = this.getRandomImage();
          });


        });


        // Swal.fire(params.get(''))
      });
    })


  }

  ngAfterViewInit(): void {

    // this.chat()

    this.users = this.totalUsersToAdd;
    console.log(this.users)
    this.users.forEach(user => {
      if (user.voted == '') {
        user.voted = 'unkown';
      }
    })
    this.users.forEach(user => {
      this.myEvent.truevotes.forEach(element => {
        if (element == user.id) {
          user.voted = true;
        }
      });
    })
    this.users.forEach(user => {
      this.myEvent.falsevotes.forEach(element => {
        if (element == user.id) {
          user.voted = false;
        }
      });
    })

  }
  // getRandomImage() {
  //   this.http.get('https://randomuser.me/api/?inc=name,location,nat,picture')
  //     .subscribe((x: any) => {
  //       //console.log("IMAGE", x)
  //       //console.log("URL", x.results[0].picture.large)
  //       return x.results[0].picture.large
  //     },
  //       error => {
  //         //console.log("IMAGE ERROR", error)
  //       });
  // }

  getRandomNumber(): number {
    let randomNumber: number = Math.floor(Math.random() * 15) + 1;
    return randomNumber;
  }
  acceptbtn() {
    Swal.fire('SUCCESS', 'Invitation accepted successfully.').then(_ => this.router.navigate(['/dashboard-member']))
  }

  Vote(id) {
    Swal.fire({
      title: 'Vote',
      showCancelButton: true,
      confirmButtonColor: '#36BEA6',
      cancelButtonColor: '#921A24',
      cancelButtonText: '<i class="fas fa-times"></i>',
      confirmButtonText: '<i class="fas fa-check"></i>'
    }).then((result) => {
      let check: any;
      check = this.users.filter(x => x.id == id);
      if (result.value) {
        this.users.forEach(x => {
          if (x.id == id) {
            x.voted = 'true';
          }
        })
        this.db.collection("MyEvents").doc(this.myEvent.title).update({
          "meta.users": this.users
        })


      }
      else {
        this.users.forEach(x => {
          if (x.id == id) {
            x.voted = 'false';
          }
        })
        this.db.collection("MyEvents").doc(this.myEvent.title).update({
          "meta.users": this.users
        })
      }




      //  }
      // var votedbefore=false;
      // let arraytrue=this.myEvent.truevotes;
      // let arrayfalse=this.myEvent.falsevotes;
      // arraytrue.forEach(element => {
      //   if(element==id){
      //     Swal.fire('Sorry', 'You Voted Before');
      //     votedbefore=true;
      //   }
      // });
      // arrayfalse.forEach(element => {
      //   if(element==id){
      //     Swal.fire('Sorry', 'You Voted Before');
      //     votedbefore=true;
      //   }
      // });
      // if (result.value && votedbefore==false) {
      //   arraytrue.push(id);
      //   this.myHelper.updateEventToLocalTrue(this.myEvent,arraytrue)
      //   this.users.forEach(element=>{
      //     if(element.id==id){
      //       element.voted=true;
      //     }
      //   })
      // }
      // if(!result.value && votedbefore==false){
      //   arrayfalse.push(id);
      //   this.myHelper.updateEventToLocalFalse(this.myEvent,arrayfalse)
      //   this.users.forEach(element=>{
      //     if(element.id==id){
      //       element.voted=false;
      //     }
      //   })
      // }
    })
  }

  DownloadFirebase(item) {
    this.db.collection(this.myEvent.title).doc("test").collection('Uploads').get().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        if (doc.data().name == item) {
          // window.location.assign(doc.data().path);
          window.open(doc.data().path);
        }
      });
    });
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  Download(item) {
    const formData = new FormData();
    formData.append('item', item);
    var saveAs: any;
    this.http
      .get('http://localhost:3000/getfile/' + item, { responseType: "blob" }) //set response Type properly (it is not part of headers)
      .toPromise()
      .then(blob => {
        let url = window.URL.createObjectURL(blob);
        let pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
          alert('Please disable your Pop-up blocker and try again.');
        }
      })
      .catch(err => console.error("download error = ", err))
    // this.http.get<any>('http://localhost:3000/getfile/'+item,{}).subscribe(
    //     (res) => console.log(res),
    //     (err) => console.log(err)
    //   );

  }

  deleteEvent() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Delete Event? You won't be able to revert this!",
      // type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#00796b',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        //DELETE CODE
        this.myHelper.deleteEvent(this.myEvent);
        // //console.log("Event TItle", this.event)
        this.router.navigateByUrl('/calendar').then(e => {
          if (e) {
            //console.log("Navigation is successful!");
          } else {
            //console.log("Navigation has failed!");
          }
        });
      }
    })
  }
  rejectbtn() {

  }

  onToggleChat() {
    this.chatComponent.toggle()
    // var menuRight = document.getElementById('cbp-spmenu-s1')

    // $(menuRight).toggleClass('cbp-spmenu-open');
  }

}
