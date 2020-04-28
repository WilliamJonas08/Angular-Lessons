import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Store } from 'src/app/proCoursesFeature/store';
import { SongService } from '../../services/song.service';
import { Plant } from '../../models/plant.interface';

@Component({
  selector: 'app-songs-favourites',
  templateUrl: './songs-favourites.component.html',
  styleUrls: ['./songs-favourites.component.css']
})
export class SongsFavouritesComponent implements OnInit {

  favourites$: Observable<any[]>

  constructor(private service: SongService, private store: Store) { }

  ngOnInit(): void {
    this.favourites$ = this.store.select<Plant[]>("playlist")
      .pipe(
        filter(Boolean),
        map((plants: Plant[]) => plants.filter(plant => plant.action !== "none"))
      )
  }

  onToggle(event:Plant){
    this.service.toggle(event)
  }

}
