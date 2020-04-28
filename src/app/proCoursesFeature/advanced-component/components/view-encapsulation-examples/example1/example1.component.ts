import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-one',
  encapsulation : ViewEncapsulation.Emulated, //Encapsulation by default
  /**
   * 
   */
  template: `
  <div>
    <div class="example-1">
      Example 1
    </div>
  </div>
  `,
  styles: [`
  .example-1{ background-color: lightblue;}
  `],
})
export class Example1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
