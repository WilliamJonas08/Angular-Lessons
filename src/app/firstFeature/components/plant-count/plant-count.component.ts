import { Component, Input } from '@angular/core';

import { Plant } from '../../models/plant.interface'

@Component({
  selector: 'app-plant-count',
  templateUrl: './plant-count.component.html',
  styleUrls: ['./plant-count.component.css']
})
export class PlantCountComponent{

  // Input decorator indicates that items is data whitch is binded
  // properties must have the same name (items)
  @Input()
  items:Plant[]

  plantedCount():number{
    if(!this.items) return 0;  // Pas besoin de mettre des accolades
    return this.items.filter((plant:Plant)=> plant.planted ).length // This array function implicitly returns plant.planted
  }

}
