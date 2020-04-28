import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'binded-child',
  templateUrl: './binded-child.component.html',
  styleUrls: ['./binded-child.component.css']
})
export class BindedChildComponent implements OnInit {

  @Output()
  checked: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onChecked(value:boolean){
    // console.log(value)
    this.checked.emit(value)
  }

}
