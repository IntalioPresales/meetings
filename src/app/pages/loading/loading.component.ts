import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'loading',
	template: `		<div id="pause" class="d-flex align-items-center justify-content-center">
									<div id="spinner"></div>
								</div>`,
	styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

   major: boolean=false;

  constructor() { }

  ngOnInit() {


  }

  load() : void {
    this.major = true;
    setTimeout( () => this.major = false, 2000 );
  }


}
