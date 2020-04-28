import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from '../../models/product.interface'


@Component({
  selector: 'stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent{

@Input()
parent: FormGroup

@Input()
products: Product[]

@Output()
added= new EventEmitter<any>()

get notSelected(){
  return !this.parent.get('selector.product_id').value
}

get stockExists(){
  return (this.parent.hasError('stockExists') &&  //l'article est déja en stock
   this.parent.get('selector.product_id').dirty // si un article a déja été sélectionné
  )
}

onAdd(){
  this.added.emit(this.parent.get('selector').value)
  
  // UPDATING AND RESETING FORMGROUPS AND FORM CONTROLS
  this.parent.get('selector').reset({ 
    product_id: '', //new control's value
    quantity:10
  })
  //reset: reset initial control values and reset all component attributes (like class)
  //patchValue: enable to just change one or multiple control value
  //setValue: enable to change all control's value in the same time (can't be used for only one of those controls)
}

}
