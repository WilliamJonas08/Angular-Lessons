import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Store } from 'src/app/proCoursesFeature/store';
import { SongService } from '../../services/song.service';
import { Plant } from '../../models/plant.interface';

@Component({
  selector: 'app-songs-listened',
  templateUrl: './songs-listened.component.html',
  styleUrls: ['./songs-listened.component.css']
})
export class SongsListenedComponent implements OnInit {

  listened$: Observable<any[]>

  constructor(private service: SongService, private store: Store) { }

  ngOnInit(): void {
    this.listened$ = this.store.select<Plant[]>("playlist")
      .pipe(
        filter(Boolean), // METHODE : Enable to test if the data exists ( before operations )
        map((plants: Plant[]) => plants.filter(plant => plant.planted))
      )
  }

  onToggle(event:Plant){
    this.service.toggle(event)
  }

}
