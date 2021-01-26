import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-minutes-meeting-details',
  templateUrl: './minutes-meeting-details.component.html',
  styleUrls: ['./minutes-meeting-details.component.scss']
})
export class MinutesMeetingDetailsComponent implements OnInit {

  id
  event
  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id)

      this.db.doc<any>(`MyEvents/${this.id}`).valueChanges()
        .subscribe(event => {
          this.event = event;
          console.log(event)
        });
    })
  }

}
