import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'change-detection-example-two',
  changeDetection:ChangeDetectionStrategy.Default, //Propriété étudiée
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css']
})
export class ExampleTwoComponent implements OnInit {

  @Input()
  user

  constructor() { }

  ngOnInit(): void {
  }

}
