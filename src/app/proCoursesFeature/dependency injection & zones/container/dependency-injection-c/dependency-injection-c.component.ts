import { Component, OnInit } from '@angular/core';
import { DependencyInjectionService } from '../../service/dependency-injection.service';
import { HttpClient } from '@angular/common/http';

export function MyCartFactory(http) {
  return new DependencyInjectionService(http, 'api/cart')
}

// And in another component, we should have provided this other factory
// Need to enable custom parameters in the constructor
export function MyProductFactory(http) {
  return new DependencyInjectionService(http, 'api/product')
}

// EXEMPLE : useExisting
// Création d'une classe abstraite qui sera "utilisée" comme service, uniquement pour restreindre les méthodes utilisées par le DependencyInjectionService 
// (restreindre au sens oû le type-checking renverra une erreur mais les autres méthodes du service original pourront malgré tout être utilisées)
export abstract class DrinkService{
  getDrinks:()=>void
}

// EXEMPLE: Configurated ngModule -> cf proCoursesModule

@Component({
  selector: 'app-dependency-injection-c',
  templateUrl: './dependency-injection-c.component.html',
  styleUrls: ['./dependency-injection-c.component.css'],
  providers: [
    {
      provide: DependencyInjectionService,
      // {provide: DrinkService, useExisting: DependencyInjectionService},  
      //Dans le cas oû on veut utiliser useExisting provider pour restreindre les méthodes à utiliser pour un service
      // Dans le cas présent, la méthode "getFood" du DependencyInjectionService serait soulignée en route

      useFactory: MyCartFactory, //Or another Factory
      deps: [
        HttpClient
      ]
    }
  ]
})

export class DependencyInjectionCComponent implements OnInit {

  constructor(private service: DependencyInjectionService) { }

  ngOnInit(): void {
    this.service.getDrinks() //Sera proposé
    this.service.getFood() //Sera souligné en rouge mais cela fonctionnera quand même
  }

}
