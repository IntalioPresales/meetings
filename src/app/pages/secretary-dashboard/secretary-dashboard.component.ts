import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-secretary-dashboard',
  templateUrl: './secretary-dashboard.component.html',
  styleUrls: ['./secretary-dashboard.component.scss'],
})
export class SecretaryDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.overflow = 'hidden'
  }

  //Remove style on destroy
  ngOnDestroy(): void {
    document.body.style.removeProperty('overflow')
  }
}
