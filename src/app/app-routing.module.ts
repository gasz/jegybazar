import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EventComponent} from './event/event.component';
import {TicketComponent} from './ticket/ticket.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

// az egyes route-ok ebben a tömbben, számít az tömbelemek sorrendje,
// pl hiába van 'home', ha legelől a '**', akkor őrá route-olna
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'event', component: EventComponent},
  {path: 'ticket', component: TicketComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // ha pontosan a semmi van megadva, akkor redirecta a /home-ra
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  static routableComponents = [
    HomeComponent,
    EventComponent,
    TicketComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent
  ];
}
