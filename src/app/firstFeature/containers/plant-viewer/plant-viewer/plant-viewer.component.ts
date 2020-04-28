import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { FirstFeatureService } from 'src/app/firstFeature/first-feature.service';

import { Plant } from 'src/app/firstFeature/models/plant.interface';

@Component({
  selector: 'app-plant-viewer',
  templateUrl: './plant-viewer.component.html',
  styleUrls: ['./plant-viewer.component.css']
})
export class PlantViewerComponent implements OnInit {

  plant: Plant

  constructor(private router: Router, private route: ActivatedRoute, private firstFeatureService: FirstFeatureService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((paramsData: Plant) => {
        // paramsData est un object de type { id:} et n'est pas vraiment de type Plant
        this.firstFeatureService.getPlant(paramsData.id).subscribe((data: Plant) => this.plant = data)
      })
      // TODO : voir méthode switchMap
  }

  handlePlantUpdate(event) {
    this.firstFeatureService.updatePlant(event).subscribe((data: Response) => {
      this.plant = Object.assign({}, this.plant, data.json)
    })
  }

  goBack(){
    this.router.navigate(['/plants'])
  }

}
