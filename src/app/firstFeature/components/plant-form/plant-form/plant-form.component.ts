import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Plant } from 'src/app/firstFeature/models/plant.interface';
import { PlantAction } from 'src/app/firstFeature/models/plant-action.interface';


/**
 * REVOIR 
 *  #form="ngForm"
 *  novalidate
 */

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent implements OnInit {

  @Input()
  detail: Plant

  @Output()
  update:EventEmitter<Plant> = new EventEmitter()

  plantActions: PlantAction[] = [{
    key: "none",
    value: "let the plant grow on its own"
  }, {
    key: "water",
    value: "water the plant"
  }, {
    key: "dance",
    value: "make the rain dance all night long"
  }]

  constructor() { }

  ngOnInit(): void {
  }

  togglePlanted(planted: boolean) {
    if (planted) {
      // cette partie est normalement réalisée directement par le server
      this.detail.plantedDate = +new Date()  //or Date.now()
    }
  }

  onSubmit(plant:Plant, isFormValid:boolean){
    if(isFormValid){
      // Sécurité supplémentaire au cas oû le [disabled] binding était supprimé via l'inspecteur par le user
      this.update.emit(plant)
    }
  }
}
