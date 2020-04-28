import { Component } from '@angular/core';

@Component({
  selector: 'app-my-for',
  templateUrl: './my-for.component.html',
  styleUrls: ['./my-for.component.css']
})
export class MyForComponent {

  items=[{
    name:"Patrick",
  },{
    name:"John"
  },{
    name:"Kevin"
  }]

  constructor() {
    setTimeout(()=>{
      this.items=[...this.items,{name:"William"}]
      // Spread operator so this data will pass again inside the Input decorator (if we just make this.items.push, it won't)
    },2000)
   }

}
