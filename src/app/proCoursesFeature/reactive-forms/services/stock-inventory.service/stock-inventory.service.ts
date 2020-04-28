import { Injectable, Inject } from '@angular/core';

import { Product, Item } from '../../models/product.interface'
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

import { API_TOKEN } from 'src/app/proCoursesFeature/token';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {
  // private API: string = 'http://localhost:3000/'

  constructor(private http: HttpClient, @Inject(API_TOKEN) private API/*@Inject('API') private API*/) {} //@Inject enable to provide a value to "API" from the pro-courses.module

  getCartItems(): Observable<Object> { // Item[]
    return this.http.get(this.API + 'cart')
  }

  getProducts(): Observable<Object> { // PROBLEME : TS ne détecte pas le bon type .. Observable<Product[]>
    return this.http.get(this.API + 'products')
    // TODO catch error
  }

  checkBranchID(id: string): Observable<boolean> {
    // let search=new URLSearchParams() //ancienne version
    let search = new HttpParams({})
    search = search.append('id', id) // search = "id=1" 
    return this.http.get(this.API + 'branches', { params: search })
      .pipe(map((res: any[]) => !!res.length)) // '!!' casts the response into a boolean type

    // return this.http.get(API+'branches'+`?id=${id}`)
    // .pipe(map((res:any[])=>!!res.length)) // '!!' casts the response into a boolean type
  }
}
