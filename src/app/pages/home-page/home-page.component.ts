import { LoadingComponent } from './../loading/loading.component';
import { Component, Inject, ViewChild } from '@angular/core';
// import { MyRooms } from '../.././data/rooms.data'
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MyHelperService } from 'src/app/services/my-helper.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  @ViewChild(DataTableDirective, { static: false })
  @ViewChild(LoadingComponent, { static: true }) loading;

  dtElement: DataTableDirective;
  dtTrigger: Subject<DataTableDirective> = new Subject();
  major: boolean = false;
  // available_rooms = MyRooms.filter(x => x.available);
  available_rooms: any;
  // not_available_rooms = MyRooms.filter(x => !x.available);
  not_available_rooms: any;



  title = 'meeting-system-material';

  //daily expected events
  public innerWidth: any;
  public canvasWidth = 300
  public backgroundimage = "../../../assets/img/5812.jpg";
  public needleValue = 65
  public centralLabel = '16'
  public name = ''
  public bottomLabel = ''
  isLoading = false;
  public options = {
    hasNeedle: false,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['#00796B', 'lightgray'],
    arcDelimiters: [63],
    rangeLabel: ['5', '23'],
    needleStartValue: 63,
  }

  //Requests
  // Doughnut
  public doughnutChartLabels: Label[] = ['Pending', 'Active', 'Done'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    // [50, 150, 120],
    // [250, 130, 70],
  ];
  myRooms: any;
  filteredMyRooms: any
  requires_cleaning_rooms: any
  public doughnutChartType: ChartType = 'doughnut';

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private myHelper: MyHelperService,
  ) {

    // ////console.log("FilteredMyRooms", this.myRooms);
    ////console.log("Available", this.available_rooms);
    ////console.log("NOT Available", this.not_available_rooms);
  }

  ngOnInit() {
    this.load();

    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    this.available_rooms = this.myHelper.getAvailableRooms();
    this.not_available_rooms = this.myHelper.getNotAvailableRooms();

    ////console.log("ALL ROOMS FROM LOCAL", this.myHelper.getRoomsFromLocal())
  }


  load(): void {
    this.isLoading = true;

  }

  resetTableFilter() {
    this.filteredMyRooms = [...this.available_rooms, ...this.not_available_rooms];
  }
  filterTable(icon: string) {
    this.filteredMyRooms = this.filteredMyRooms.filter(x => x.amenities.includes(icon));
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      // while(this.available_rooms.length<1&&this.not_available_rooms.length<1){
      this.isLoading = true;
      this.available_rooms = this.myHelper.getAvailableRooms();
      this.not_available_rooms = this.myHelper.getNotAvailableRooms();
      // }
    }, 1000);


    setTimeout(() => {

      this.isLoading = false;
      this.myRooms = [...this.available_rooms, ...this.not_available_rooms];
      this.filteredMyRooms = [...this.available_rooms, ...this.not_available_rooms];
      this.requires_cleaning_rooms = this.myRooms.filter(x => x.needs_cleaning);
      this.dtTrigger.next();
    }, 2000);

  }

  ngOnDestroy(): void {

    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
