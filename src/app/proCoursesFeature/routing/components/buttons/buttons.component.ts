import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

const ROUTING_SECTION_URL = '/pro-courses/routing'

@Component({
  selector: 'routing-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Output()
  clicked: EventEmitter<number> =new EventEmitter()

  constructor(private router: Router) { }

  clickOne() {
    // this.router.navigate([ROUTING_SECTION_URL + '/one'])
    this.clicked.emit(1)
  }
  clickTwo() {
    // this.router.navigate([ROUTING_SECTION_URL + '/two'])
    this.clicked.emit(2)

  }
  // [{outlets: {primary: 'path' ,sidebar: 'path'}}]
}
