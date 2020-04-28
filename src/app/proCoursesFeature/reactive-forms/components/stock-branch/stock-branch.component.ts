import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.scss']
})
export class StockBranchComponent {
// A form group is now its own component

  @Input()
  parent: FormGroup

  get unknown(){
    return this.parent.get('store.branch').hasError('unknownBranch') &&
    this.parent.get('store.branch').dirty
  }

  get invalid(){
    return this.parent.get('store.branch').hasError('invalidBranch') &&
    this.parent.get('store.branch').dirty &&//le user a déja écris qqch
    !this.required('branch')
  }

  // Permet de vérifier et d'afficher l'erreur si le champ est manquant et si l'utilisateur a déja interagis avec le input
  required(name:string){
    return this.parent.get(`store.${name}`).hasError('required') //champ défini comme requis ? (défini dans la définition du form)
    && this.parent.get(`store.${name}`).touched //champ touché par l'utilisateur ?
  }
}
