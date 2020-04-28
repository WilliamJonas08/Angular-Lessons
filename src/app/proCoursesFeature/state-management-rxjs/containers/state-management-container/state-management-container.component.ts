import { Component, OnInit } from '@angular/core';

import { Store } from 'src/app/proCoursesFeature/store';

// Stateless component = Presentational component

@Component({
  selector: 'app-state-management-container',
  templateUrl: './state-management-container.component.html',
  styleUrls: ['./state-management-container.component.scss']
})
export class StateManagementContainerComponent implements OnInit {

  // todos$ = this.store.select<any[]>('todos') //Le $ à la fin signifie qu'il s'agit d'un observable

  constructor(private store: Store) { 
    // this.store.set('todos',[{id:1,name:'Eat something'}, {id:2, name:'Do Washing'}])
  }

  ngOnInit(): void {
    // console.log(this.todos$)
  }

}
