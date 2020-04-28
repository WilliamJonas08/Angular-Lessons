import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'change-detection-example-one',
  changeDetection:ChangeDetectionStrategy.OnPush, //Propriété étudiée
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements OnInit {

  @Input()
  user

  constructor() { }

  ngOnInit(): void {
  }

}
