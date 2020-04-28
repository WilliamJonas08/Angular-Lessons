import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plant } from '../../models/plant.interface';
import { RoutingCoursesService } from '../../services/routing-courses.service';

const ROUTING_SECTION_URL = 'pro-courses/routing'

@Component({
  selector: 'app-routing-container',
  templateUrl: './routing-container.component.html',
  styleUrls: ['./routing-container.component.scss']
})
export class RoutingContainerComponent implements OnInit {

  data: Plant[]
  plants: Plant[]

  constructor(private router: Router, private routingCoursesService: RoutingCoursesService) { }

  ngOnInit(): void {
    this.routingCoursesService.getPlants().subscribe((plants: Plant[]) => {
      this.data = plants
      this.buttonClicked(1)
    })
  }

  buttonClicked(nbButton: number):void {
    if (nbButton===1){ //Affichage plantes plantées
      this.plants=this.data.filter(plant=>plant.planted===true)
      return
    }
    //Affichage plantes non plantées
      this.plants=this.data.filter(plant=>plant.planted===false)
      return
    
  }

  // clickOne() {
  //   this.router.navigate([{outlets: {secondRoutingOutlet: ROUTING_SECTION_URL + '/one'}}])
  //   // this.router.navigate([{outlets: {secondRoutingOutlet: ROUTING_SECTION_URL + '/one'}}])
  // }
  // clickTwo() {
  //   this.router.navigate([{outlets: {primary: [`${ROUTING_SECTION_URL}`] ,secondRoutingOutlet: [ROUTING_SECTION_URL + '/two']}}])
  // }

}

/**
 *  Router events subscription : see the App component onInit
 *
 * ROUTER OUTLET EVENTS (PROPERTIES BINDED)
 * (activate)=onActivate($event)
 * (deactivate)=onDeactivate($event)    $event corresponds to the projected component
 */