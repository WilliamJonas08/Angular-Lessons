import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Store } from '../../store';
import { Plant } from '../models/plant.interface';


@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient, private store:Store) { }

  getPlaylist = this.http
    .get('http://localhost:3000/plants')
    .pipe(tap(value => this.store.set("playlist", value))) //tap() = do() -> ordre donnée au meme moment que la requete 
    // on donne au store la playlist sous l'attribut "playlist"

  toggle(event){
    this.http
    .put(`http://localhost:3000/plants/${event.plant.id}`,event.plant)
    .subscribe((plant:Plant)=>{

      const value= this.store.value.playlist

      const playlist=value.map((plant:Plant)=>{
        if (event.plant.id === plant.id){
          return { ...plant, ...event.plant}
        }
        else {return plant}
      })

      this.store.set("playlist", playlist)

    })
  }

}
