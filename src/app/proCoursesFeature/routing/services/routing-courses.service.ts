import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';

const PLANT_API: string = 'http://localhost:3000/plants'

@Injectable({
  providedIn: 'root'
})
export class RoutingCoursesService {

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Object> {
    return this.http
      .get(PLANT_API)

  }
}