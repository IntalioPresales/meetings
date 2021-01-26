import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-minutes-meeting',
  templateUrl: './minutes-meeting.component.html',
  styleUrls: ['./minutes-meeting.component.scss']
})
export class MinutesMeetingComponent implements OnInit {

  users_: any = [
  ];

  searchText: string = '';
  users: any = []
  id
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  @HostListener('input') oninput() {
    this.searchItems();
  }
  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,

  ) {
    this.users = this.users_;
  }

  ngOnInit() {
    this.loadEvents()

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id)
    })
  }

  private searchItems() {

    if (!this.searchText) {
      this.users = this.users_;
      // this.mdbTable.setDataSource(this.users);
    }

    if (this.searchText) {
      this.users = this.users_;
      let usersToReturn = [];
      this.users.forEach(user => {
        if (
          user.title.toLowerCase().includes(this.searchText.toLowerCase())
          ||
          (
            user.meta &&
            user.meta.roomNumber &&
            user.meta.roomNumber.name &&
            user.meta.roomNumber.name.toLowerCase().includes(this.searchText.toLowerCase())
          )

        ) {
          usersToReturn.push(user);
        }
      });
      this.users = usersToReturn;
    }
  }

  private async loadEvents() {
    let data = this.db.firestore.collection('MyEvents').get();
    data.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let event = doc.data();
        console.log(event);
        this.users_.push(event);
      })
    })
  }

}
