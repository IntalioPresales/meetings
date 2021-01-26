import { AngularFirestore } from '@angular/fire/firestore';
import { SelectedUser } from './../../../blocks/interface/topic';
import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/blocks/interface/topic';

@Component({
  selector: 'app-pan-member',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss']
})
export class PanMemberComponent implements OnInit {

  @Input() topic: Topic;
  @Input() event:any;
  Invotesupcheck:boolean=true;
  Invotesdowncheck:boolean=true;
  public a:any;
  public b:any;
  array:any;

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
    console.log(this.topic);
    this.a=this.topic.votes_up.find((user:SelectedUser)=>user.id==554);
    this.b=this.topic.votes_down.find((user:SelectedUser)=>user.id==554);

  }
  voteup(){
    if(this.b||this.a){
      return;
    }
    this.a='votedup';
    this.topic.votes_up.push({id:554,name:'Mike Ross'});
    this.event.topics[0]=this.topic;
    this.db.collection('MyEvents').doc(this.event.title).update({
      topics:this.event.topics
    });
  }
  votedown(){
    if(this.a||this.b){
      return;
    }
    this.b='voteddown';
    this.topic.votes_down.push({id:554,name:'Mike Ross'});
    this.event.topics[0]=this.topic;
    this.db.collection('MyEvents').doc(this.event.title).update({
      topics:this.event.topics
    });
  }

}
