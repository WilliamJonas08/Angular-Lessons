import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// Configuration ton implement a CONTROLVALUEACCESSOR
const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR, // ? Allows us to gain access to the existing value accessor
  useExisting: forwardRef(() => StockCounterComponent), //used to tell which component will be able to control read and write access
  // forwardRef simply allows us to wait for the StockCounterComponent to be available
  multi: true // ? extending the NG_VALUE_ACCESSOR with our StockCounterComponent
}

@Component({
  selector: 'stock-counter',
  providers: [COUNTER_CONTROL_ACCESSOR],
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent implements ControlValueAccessor {

  // Implementation DefaultValueAccessor interface
  private onTouch: Function = () => { }
  private onModelChange: Function = () => { }
  writeValue(value) { //initial value passed here
    this.value = value || 0 //"ou" au cas ou il y aurait un string ou aucune valeur
  }
  registerOnChange(fn) {
    this.onModelChange = fn
  }
  registerOnTouched(fn) {
    this.onTouch = fn
  }


  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 100;

  @Output() //Créé juste pour les cours unit-testing (mais pas implémenté dans les composants parents)
  changed = new EventEmitter<number>()

  value: number = 10;
  focus: boolean

  // KEYBOARD EVENTS
  onKeyDown(event: KeyboardEvent) {
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    }
    if (handlers[event.code]) {
      // console.log(event.code)  // ArrowUp or ArrowDown
      handlers[event.code]()
      event.preventDefault()
      event.stopPropagation()
    }
    this.onTouch()
  }
  onBlur(event: FocusEvent) {
    this.focus = false
    event.preventDefault()
    event.stopPropagation()
    this.onTouch()
  }
  onFocus(event: FocusEvent) {
    this.focus = true
    event.preventDefault()
    event.stopPropagation()
    this.onTouch()
  }


  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step
      this.onModelChange(this.value) //Register the model change
      this.changed.emit(this.value)//Créé juste pour les cours unit-testing (mais pas implémenté dans les composants parents)
    }
    this.onTouch() //Enable to tell the form that a control has been modified
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step
      this.onModelChange(this.value)
      this.changed.emit(this.value)//Créé juste pour les cours unit-testing (mais pas implémenté dans les composants parents)

    }
    this.onTouch()
  }
}
