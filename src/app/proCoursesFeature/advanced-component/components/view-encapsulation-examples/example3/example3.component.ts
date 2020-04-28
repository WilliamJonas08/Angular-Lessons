import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-three',
  encapsulation: ViewEncapsulation.None,
  /**
 * Creates global styles , harder to manage 
 */
  template: `
  <div>
    <div class="example-1">
      Example 1
    </div>
    <!-- <div class="example-2">
      Example 2
    </div> -->
    <div class="example-3">
      Example 3
    </div>
  </div>
  `,
  styles: [`
    .example-1{ color: 1px solid red;}
    .example-2{ background-color: red;}
    .example-3{ background-color: lightblue;}

  `],
})
export class Example3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}