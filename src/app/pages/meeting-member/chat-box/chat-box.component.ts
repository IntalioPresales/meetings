import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-box-member',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxMemberComponent implements OnInit {

  @Input() users: any[]
  messeges = [
    'You just got LITT up, Mike.',
    'Wrong. You take the gun, or you pull out a bigger one. ',
    'I was thinking that we could have chicken tonight, sounds good?',
    'I know everything! Im Donna..',
    'Have you finished the draft on the Hinsenburg deal?',
    'Thanks! :)',
    "We'll meet again, Mike. Tell Jessica I said 'Hi'",
    "I've sent you the files for the Garrett trial.",
    "This isn't over",
    "This deal is solid.",
  ]
  constructor() { }

  ngOnInit() {
    this.randomMessage()
  }

  randomMessage() {
    const random = Math.floor((Math.random() * 10) + 1);
    return this.messeges[random]
  }


}
