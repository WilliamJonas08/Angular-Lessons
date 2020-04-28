import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Response } from '@angular/http';

import { FirstFeatureService } from '../../first-feature.service';

import { Plant } from '../../models/plant.interface'

// DashBoardComponent
@Component({
  selector: 'app-component-architecture-and-feature-modules',
  templateUrl: './component-architecture-and-feature-modules.component.html',
  styleUrls: ['./component-architecture-and-feature-modules.component.css']
})
export class ComponentArchitectureAndFeatureModulesComponent implements OnInit {

  plants: Plant[]

  constructor( private router: Router, private firstFeatureService: FirstFeatureService) { }
  // Le constructeur initialise la variable firstFeatureService représentant le service correspondant

  ngOnInit() {
    this.firstFeatureService.getPlants().subscribe((data: Plant[]) => {
      // TODO typer
      // console.log(data)
      this.plants = data
    })
  }

  handleEdit(event: Plant) {
    this.firstFeatureService.updatePlant(event).subscribe(() => {
      // Changement local de la data (mtn que la bdd est update)
      this.plants = this.plants.map((plant: Plant) => {
        if (plant.id === event.id) {
          // Car l'objet de type plant est immutable
          plant = Object.assign({}, plant, event)
        }
        return plant
      });
    })
    // console.log(this.plants)
  }

  // TODO: make remove output
  handleRemove(event: Plant) {
    this.firstFeatureService.removePlant(event).subscribe(() => {
      // Changement local de la data (mtn que la bdd est update)
      this.plants = this.plants.filter((plant: Plant) => plant.id !== event.id);
    })
    // console.log(this.plants)
  }

  handleView(event){
    this.router.navigate(['/plants',event.id])
  }
}
