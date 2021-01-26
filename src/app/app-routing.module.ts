import { MinutesMeetingDetailsComponent } from './pages/minutes-meeting-details/minutes-meeting-details.component';
import { MinutesMeetingComponent } from './pages/minutes-meeting/minutes-meeting.component';
import { SecretaryDashboardComponent } from './pages/secretary-dashboard/secretary-dashboard.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
// import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SingleEventComponent } from './pages/single-event/single-event.component';
import { AddressBookComponent } from './pages/address-book/address-book.component';
import { InRoomAppComponent } from './pages/in-room-app/in-room-app.component';
import { OnDoorAppComponent } from './pages/on-door-app/on-door-app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvitationComponent } from './pages/invitation/invitation.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardMemberComponent } from './pages/dashboard-member/dashboard-member.component';
import { MeetingMemberComponent } from './pages/meeting-member/meeting-member.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'todos',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: LoginPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard-member',
    component: DashboardMemberComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }, {
    path: "secretary-dashboard",
    component: SecretaryDashboardComponent
  },
  {
    path: 'calendar',
    component: CalendarPageComponent
  },
  {
    path: "event/:id",
    component: SingleEventComponent
  },
  {
    path: "invitation/:id",
    component: InvitationComponent
  },
  {
    path: "address",
    component: AddressBookComponent
  },
  {
    path: "minutes-meeting",
    component: MinutesMeetingComponent
  },
  {
    path: "minutes-meeting-details/:id",
    component: MinutesMeetingDetailsComponent
  },
  {
    path: "in-room-app",
    component: InRoomAppComponent
  },
  {
    path: "on-door-app/:id",
    component: OnDoorAppComponent
  },
  {
    path: 'meeting/:title',
    component: MeetingComponent
  },
  {
    path: 'meeting-member/:title',
    component: MeetingMemberComponent
  },
  {
    path: '404', component: NotFoundComponent
  },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
