import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../../models/plant.interface';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent{

  @Input()
  plant : Plant

  constructor() { }



}
