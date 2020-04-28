import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant.interface'

@Component({
  selector: 'app-rendering-flows',
  templateUrl: './rendering-flows.component.html',
  styleUrls: ['./rendering-flows.component.scss']
})
export class RenderingFlowsComponent implements OnInit {

  ngif:boolean=false;
  ngfor:boolean=false;
  ngclass:boolean=false;
  ngstyle:boolean=false;
  pipe:boolean=false;
  safe:boolean=false;


myCondition:boolean = false;

plants : Plant[] =[
  {
    id:1,
    name: "Potatoes",
    planted:true,
    plantedDate:1490752000000,
    action:"none"
  },
  {
    id:2,
    name: "Strawberries",
    planted:false,
    action:"none"
  },
  {
    id:3,
    name: "Radish",
    planted:true,
    plantedDate:1440752005000,
    action:"none"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

  changeCondition(){
    this.myCondition=!this.myCondition
  }
}
