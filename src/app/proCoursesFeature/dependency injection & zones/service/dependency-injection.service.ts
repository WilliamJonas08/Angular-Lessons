import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DependencyInjectionService {

  constructor(private http: HttpClient ,@Inject('api') private api:string) { 
    console.log(this.api)
  }

  //Methods using a specific api url
  getDrinks(){console.log('drinks')}

  getFood(){console.log('food')}
}
