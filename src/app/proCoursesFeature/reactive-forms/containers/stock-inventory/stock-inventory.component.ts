import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'

import { Product, Item } from '../../models/product.interface'
import { StockInventoryService } from '../../services/stock-inventory.service/stock-inventory.service';

import { StockValidators } from './stock-inventory.validators';

/** Reactive Forms :
 * Different from a template driven form (where the template is source of truth) : ngModule
 * Here it's the component which is the source of truth (Reactive Forms)
 */

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css'],
  // Providers & UseClass
  providers: [{provide: StockInventoryService, useClass: StockInventoryService}] // ="StockIventoryService"
})
export class StockInventoryComponent implements OnInit {

  products: Product[]
  total: number

  productMap: Map<number, Product> //sert uniquement à faire la traduction entre l'id et le name

  form = this.fb.group({
    store: this.fb.group({
      branch: ['', [Validators.required, StockValidators.checkBranch], [this.validateBranch.bind(this)]], //[default value, CUSTOM CONTROL VALIDATOR, CUSTOM ASYNC VALIDATOR]
      code: ['', Validators.required],
    }),
    selector: this.createStock({})
    ,
    stock: this.fb.array([])
  }, { validator: StockValidators.checkStockExists })//CUSTOM FORM VALIDATOR (attention à la syntaxe pour mentionenr un validator pour form)

  constructor(private fb: FormBuilder, private stockService: StockInventoryService) { } // FormBuilder enable much cleaner code

  ngOnInit() {
    const products = this.stockService.getProducts()
    const cart = this.stockService.getCartItems()

    forkJoin(cart, products) // crée un array des deux observables (Joining Observables)
      .subscribe(([cart, products]: [Item[], Product[]]) => {

        const myMap = products.map<[number, Product]>(product => [product.id, product])

        this.productMap = new Map<number, Product>(myMap) //{1 , {product_details}}
        this.products = products
        cart.forEach(item => this.addStock(item))

        // Cette fonction pourrait se trouver hors du subscribe aussi
        // Maj du prix total
        this.calculateTotal(this.form.get('stock').value)
        this.form.get('stock').valueChanges.subscribe((value: Item[]) => { //Value Changes Observable
          this.calculateTotal(value)
        })
      })

  }

  // Async custom validator 
  validateBranch(control: AbstractControl) {
    return this.stockService.checkBranchID(control.value)
      .pipe(map((response: boolean) => response ? null : { unknownBranch: true }))
  }

  calculateTotal(value: Item[]) {
    const total = value.reduce((previous, next) => {
      return previous + (next.quantity * this.productMap.get(next.product_id).price) //retourne la future valeur de previous (la valeur intermédiaire de la somme)
      // Bien remarquer la méthode .get(index) sur un attribut de type Map
    }, 0)
    this.total = total
  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    })
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray; // Nous permet d'accéder directement à un formGroup particulier du formulaire !
    control.push(this.createStock(stock))
  }

  removeStock({ group, index }: { group: FormGroup, index: number }) { //Object destructuring enable to avoid value.group ... 
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index)//PROBLEME : index peut avoir 2 sens : l'ordre de l'objet supprimé ou celui dont la propriété index correspond à celle passée dans l'argument ?
  }

  onSubmit() {
    // Pas besoin de passer d'argument dans la fonction car tout est accessible via la variable form
    console.log('Submit ', this.form.value)
  }

}

/**
 *  CODE WITH FormControl AND FormGroup SYNTAXES
 */

// form = new FormGroup({
//   store: new FormGroup({
//     branch: new FormControl('B148'), //Prepopulated inputs inside the "()" of formControl
//     code: new FormControl('1234')
//   }),
//   selector: this.createStock({})
//   ,
//   stock: new FormArray([
//   ])
// })

// createStock(stock) {
//   return new FormGroup({
//     product_id: new FormControl(parseInt(stock.product_id, 10) || ''), 
//     quantity: new FormControl(stock.quantity || 10)
//   })
// }