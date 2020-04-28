import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-two',
  encapsulation: ViewEncapsulation.Native,
  /**
 * Creates its own shadow DOM -> TODO utility ?
 */
  template: `
  <div>
    <div class="example-2">
      Example 2
    </div>
    <div class="example-1">
      Example 1
    </div>
  </div>
  `,
  styles: [`
    .example-1{ border: 1px solid orange;}
    .example-2{ background-color: lightblue;}
    /* .example-3{ color: orange} */
  `],
})
export class Example2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
