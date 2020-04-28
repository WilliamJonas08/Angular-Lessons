import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from 'src/app/proCoursesFeature/store';
import { SongService } from '../../services/song.service';
import { Plant } from '../../models/plant.interface';

@Component({
  selector: 'app-songs-playlist',
  templateUrl: './songs-playlist.component.html',
  styleUrls: ['./songs-playlist.component.css']
})
export class SongsPlaylistComponent implements OnInit, OnDestroy  {

  playlist$: Observable<any[]>
  subscriptions : Subscription

  constructor(private service:SongService, private store: Store) { }

  ngOnInit(): void {
    this.subscriptions = this.service.getPlaylist.subscribe()
    // Permet d'initier le flux de donnée ( et comme défini dans le service, de donner la playlist au store !)
    // On peut définir la propriété playlist$ dans le le subscribe ou directement via le '| async' dans le DOM (le async subscribe automatiquement et unsubscribe automatiquement)

    this.playlist$ = this.store.select("playlist")
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  onToggle(event:Plant){
    this.service.toggle(event)
  }

}
