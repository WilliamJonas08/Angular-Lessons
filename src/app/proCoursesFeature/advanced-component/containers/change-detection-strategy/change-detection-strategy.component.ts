import { Component, OnInit } from '@angular/core';
import { ExampleOneComponent } from '../../components/change-detection-strategy-examples/example-one/example-one.component';
import { ExampleTwoComponent } from '../../components/change-detection-strategy-examples/example-two/example-two.component';


@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.css']
})
export class ChangeDetectionStrategyComponent implements OnInit {

user:any ={
  name:"William",
  age:21,
  location:"Marseille"
}

  constructor() { }

  ngOnInit(): void {
  }

  addProp(){
    this.user.email="william@email.fr"
  }

  changeName(){
    this.user.name="William3"
  }

  changeUser(){
    this.user={
      name:"William2",
      age:22,
      location:"Marseille2"
    }
  }

}
