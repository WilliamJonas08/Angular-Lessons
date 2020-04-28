import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from '../../models/plant.interface';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  @Input() list: Plant[]

  @Output() toggle = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  toggleItem(index: number, prop: string) {
    const plant = this.list[index]
    if (prop === "action") {
      let propValue = "water"
      if (plant.action !== "none") {
        propValue = "none"
      }
      this.toggle.emit({
        plant: { ...plant, [prop]: propValue }
      })
      return
    }
    // dans ce dernier cas la propriété étudiée est "planted" (boolean)
    this.toggle.emit({
      plant: { ...plant, [prop]:!plant[prop]}
    })
  }

}
