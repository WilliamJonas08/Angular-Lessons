import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

const PLANT_API: string = 'http://localhost:3000/plants'

@Injectable({
  providedIn: 'root'
})
export class RootingService {

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Object> {
    return this.http
      .get(PLANT_API)
  }

}
