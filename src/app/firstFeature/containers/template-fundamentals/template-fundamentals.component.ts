import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-template-fundamentals',
  templateUrl: './template-fundamentals.component.html',
  styleUrls: ['./template-fundamentals.component.css']
})
export class TemplateFundamentalsComponent implements OnInit {

  result: string = "";

  clickValue1: string;
  clickValue2: string;
  result2: string = "";

  result3: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  // (blur) détecte lorsque l'élément perd le focus
  onUnFocus(event) {
    this.result = event.target.value
  }
  // (input) détecte un changement de la value du input 
  onInput(event) {
    this.result = event.target.value
  }
  onClick() {
    this.result = "Null"
  }


  /**
   * 
   * Two Way Binding
   */

  handleChange(ngModelValue: string) {
    this.result2 = ngModelValue
  }


  getValue(value: string) {
    this.result3 = value;
  }
}
