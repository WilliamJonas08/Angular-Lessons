import { Injectable } from '@angular/core';
import { Plant } from './models/plant.interface';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, RequestOptions } from '@angular/http'
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators'

const PLANT_API: string = 'http://localhost:3000/plants'
// '/api/plants'
//  '../assets/db.json'


//Enable us to inject dependencies into our service's constructor (like http module)
@Injectable({
  providedIn: 'root'
})
export class FirstFeatureService {

  constructor(private http: HttpClient) { }

  /**
   * HTTP METHOD (PROBLEME INCOMPRIS)
   * Opening Json Server (problème: restarting when modified)
   * https://blog.eleven-labs.com/en/json-server/
   */

  getPlants(): Observable<Object> {
    return this.http
      .get(PLANT_API)
    // .pipe(map((response: Response) => response.json()))
    // QUESTION: pourquoi pas de besoin de .json ????
  }

  updatePlant(plant: Plant): Observable<Response> {
    // Custom Headers and Request Options
    // let headers = new Headers({
    //   'Content-type': 'application/json'
    // });
    // let options = new RequestOptions({
    //   headers: headers
    // })

    // .put(`${PLANT_API}/${plant.id}`, plant, options)

    return this.http
      .put(`${PLANT_API}/${plant.id}`, plant)
      .pipe(map((response: Response) => response)) // inutile  
  }
  // We can use .toPromise() instead of .map (it will return a Promise intead of an Observable and we will have to use .then instead of .substribe)

  removePlant(plant: Plant): Observable<Response> {
    return this.http
      .delete(`${PLANT_API}/${plant.id}`)
      .pipe(map((response: Response) => response)) // inutile
  }

  getPlant(id:number){
    return this.http
    .get(`${PLANT_API}/${id}`)
  }

}
