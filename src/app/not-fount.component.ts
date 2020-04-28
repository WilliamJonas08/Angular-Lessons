import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  //   styleUrls: ['./app.component.css']
  template: `
    <div>
        Not Found.
        <a routerLink="/">Go home</a> ?
    </div>
  `,
})
export class NotFoundComponent {}