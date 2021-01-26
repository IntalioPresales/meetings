import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Topic } from 'src/app/blocks/interface/topic';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss']
})
export class PanComponent implements OnInit {

  @Output() openDocument = new EventEmitter();

  @Input() topic: Topic;
  viewer = 'google';
  selectedType = 'pptx'; //'docx';
  doc = 'https://files.fm/down.php?i=sdymh2y6';

  constructor() { }

  ngOnInit() {
  }

  onOpenDocument() {
    this.openDocument.emit(Math.random())
  }

}
