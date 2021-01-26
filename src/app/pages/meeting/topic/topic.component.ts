import { Topic } from './../../../blocks/interface/topic';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChanges } from '@angular/core';
import { CountdownConfig, CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input('topic') topic: Topic;

  @Input('activeTopicId') activeTopicId: string;

  @Output() change: EventEmitter<Topic> = new EventEmitter<Topic>();

  @Output() completed: EventEmitter<Topic> = new EventEmitter<Topic>()

  @ViewChild('cd', { static: true }) private countdown: CountdownComponent;

  config: CountdownConfig = {}
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(): void {
  }

  onCompleted() {
    if (this.topic.id == this.activeTopicId) {
      this.topic.completed = true
      this.completed.emit(this.topic)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.setCountTimer()
    if (changes.activeTopicId) this.activeTopicProcessor(changes.activeTopicId)
  }

  activeTopicProcessor(activeTopicId: any) {
    if (activeTopicId.currentValue == this.topic.id) {
      setTimeout(() => {
        this.countdown.begin()
      }, 1000);
    }
  }

  setCountTimer() {
    if (this.topic.duration) {
      this.config = {
        leftTime: this.topic.duration ? this.topic.duration * 60 : 0,
        demand: true,
        format: 'm'
      }
    }
  }
}
