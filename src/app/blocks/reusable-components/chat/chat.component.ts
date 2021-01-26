import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() users: any[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chat()
  }

  // @ toggle through @ViewChild
  toggle() {
    var menuRight = document.getElementById('cbp-spmenu-s1')

    $(menuRight).toggleClass('cbp-spmenu-open');
  }

  chat() {

    setTimeout(() => {



      var menuRight = document.getElementById('cbp-spmenu-s1'),
        showRight = document.getElementById('showRight'),
        closeRight = document.getElementById('closeRight'),
        menuRight2 = document.getElementById('cbp-spmenu-s2'),
        closeRight2 = document.getElementById('closeRight2')

      $('.showRight2').click(function () {
        $(menuRight2).toggleClass('cbp-spmenu-open');
      });

      closeRight2.onclick = function () {
        $(menuRight2).toggleClass('cbp-spmenu-open');
      };

      closeRight.onclick = function () {
        $(menuRight).toggleClass('cbp-spmenu-open');
      };
    }, 2000);

  }

}
