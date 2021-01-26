import { map } from 'rxjs/operators';
import { Topic } from './../../blocks/interface/topic';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { CountdownComponent } from 'ngx-countdown';
import { interval } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  @ViewChild('documentModal', { static: true }) documentModal: TemplateRef<any>;

  viewer = 'google';
  selectedType = 'pptx'; //'docx';
  doc = 'https://files.fm/down.php?i=sdymh2y6';

  // @ PAGES
  homepage = true;
  agenda = false;
  thankYou = false;

  innerWidth: any;

  event: any
  title: string
  elapsed = 0;
  loading = true;
  activeTopic = {}

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadEvent();
    this.innerWidth = window.innerWidth;
  }

  ngAfterViewInit() {
  }

  onOpenDocument(event) {
    (this.documentModal as any).show()
  }

  startMeeting() {
    this.homepage = false;
    this.agenda = true;

    setInterval(() => {
      this.elapsed = this.elapsed + 1
    }, 60000);
    this.activeTopicProcessor();
  }


  goHome() {
    this.homepage = true;
    this.agenda = false;
    this.thankYou = false
  }

  endMeeting() {
    this.homepage = false;
    this.agenda = false;
    this.thankYou = true
  }

  loadEvent() {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
      this.getEvent();
    })
  }

  getEvent() {
    this.loading = true;

    this.db.doc<any>(`MyEvents/${this.title}`).valueChanges()
      .subscribe(event => {
        this.event = event;
        console.log("Event", event)
        this.loading = false;
      });
  }

  // onTopicChange(topic: Topic) {
  //   this.event.topics.map(tp => tp.id == topic.id && topic);
  //   this.db.doc<any>(`MyEvents/${this.title}`).update(this.event);
  // }

  onTopicCompleted(topic: Topic) {

    this.event.topics.map((tp: Topic) => tp.id == topic.id && topic);
    this.activeTopicProcessor();
    // this.db.doc<any>(`MyEvents/${this.title}`).update(this.event);
  }

  activeTopicProcessor() {
    let activeTopicId = this.defineNextTopic()
    this.event.activeTopicId = activeTopicId
  }

  defineNextTopic() {
    const topic = (this.event.topics as Topic[]).find((tp: Topic) => tp.completed == false);
    if (topic) {
      this.activeTopic = topic;
      return topic.id
    } else {
      return null
    }
  }
}
