import {Component, OnInit} from '@angular/core';
import {Router, RouterState} from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  iamNew: string;
  state: RouterState;

  constructor(router: Router) {
    this.state = router.routerState;
  }

  ngOnInit() {
  }

  whereIam() {

    //console.log(this.state.snapshot.url);

    if (this.state.snapshot.url.toString() === '/event/5/edit') {
      this.iamNew = '../../list';
    } else {
      this.iamNew = '../list';
    }
  }
}
