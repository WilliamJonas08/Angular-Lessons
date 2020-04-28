import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from 'src/app/firstFeature/models/plant.interface';
import { RootingService } from '../../services/rooting.service';

@Component({
  selector: 'app-container-test',
  templateUrl: './container-test.component.html',
  styleUrls: ['./container-test.component.css']
})
export class ContainerTestComponent implements OnInit {

  plants: Plant[]
  filteredPlants: Plant[]

  constructor(private router: Router, private rootingService: RootingService) { }

  ngOnInit(): void {
    this.rootingService.getPlants().subscribe((plants: Plant[]) => this.plants = plants)
  }

  one() {
    this.filteredPlants = this.plants.filter(plant => plant.planted === true)
    this.router.navigate(['first-direction', 1])
  }
  two() {
    this.router.navigate(['first-direction', 2])
    this.filteredPlants = this.plants.filter(plant => plant.planted === false)

  }

}
