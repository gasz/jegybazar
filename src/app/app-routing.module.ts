import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EventComponent} from './event/event.component';
import {EventListComponent} from './event/event-list/event-list.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {TicketComponent} from './ticket/ticket.component';
import {TicketListComponent} from './ticket/ticket-list/ticket-list.component';
import {TicketDetailsComponent} from './ticket/ticket-details/ticket-details.component';
import {BidComponent} from './ticket/bid/bid.component';
import {LoginComponent} from './user/login/login.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

// az egyes route-ok ebben a tömbben, számít az tömbelemek sorrendje,
// pl hiába van 'home', ha legelől a '**', akkor őrá route-olna
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'event', component: EventComponent, children: [
    {path: 'list', component: EventListComponent},
    {path: 'new', component: EventDetailComponent},
    {path: ':id/edit', component: EventDetailComponent},
  ]},
  {path: 'ticket', component: TicketComponent, children: [
    {path: 'list', component: TicketListComponent},
    {path: 'new', component: TicketDetailsComponent},
    {path: ':id/bid', component: BidComponent},
  ]},
  {path: 'user', children: [
    {path: '', component: ProfileComponent},
    {path: 'edit', component: ProfileEditComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
  ]},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // ha pontosan a semmi van megadva, akkor redirecta a /home-ra
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  static routableComponents = [
    HomeComponent,
    EventComponent,
    EventListComponent,
    EventDetailComponent,
    TicketComponent,
    TicketListComponent,
    TicketDetailsComponent,
    BidComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    ProfileEditComponent,
    AboutComponent,
    PageNotFoundComponent
  ];
}
