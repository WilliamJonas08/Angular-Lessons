import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Plant } from '../../models/plant.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss']
})

export class PlantDetailComponent implements OnChanges {

  constructor( /*private router:Router*/){}

  @Input()
  detail: Plant

  // Permet d'envoyer de la data au composant mère via le décorateur output et la variable de type eventEmitter
  @Output()
  edit: EventEmitter<Plant> = new EventEmitter();

  @Output()
  remove: EventEmitter<Plant> = new EventEmitter();

  @Output()
  view: EventEmitter<Plant> = new EventEmitter();

  editMode: boolean = false;

  // QUESTION : quels changements sont détectés finalement ?
  ngOnChanges(changes) {
    if (this.detail) {
      // Si on a reçu la data (dans le cas de l'initialisation du composant)
      // On "clone" this.detail pour le réassigner à lui même et le séparer de la variable présente dans le composant mère (bloque l'actualisation instantannée, le 2 way data flow)
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
  }

  toggleEditMode() {
    if (this.editMode) {
      // Sending data to the parent component
      this.edit.emit(this.detail)
    }
    this.editMode = !this.editMode
  }

  removePlant() {
    this.remove.emit(this.detail)
  }

  onNameChange(value) {
    // Changement local du nom de la plant qui va impliquer un changement dans le composant mère !
    // QUESTION : Pourquoi le nom est automatiquement modifié dans le parent sans le passage par le bouton edit ? variable partagée dans les 2 sens à cause du input ? (video ngonchanges à 1 min)
    this.detail.name = value
  }

  goToPlant() {
    this.view.emit(this.detail)
    // this.router.navigate(['/plants',this.detail.id])
  }
}
