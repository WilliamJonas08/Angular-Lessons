import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home.component';
import { NotFoundComponent } from '../not-fount.component';

import { ContainerTestComponent } from './containers/container-test/container-test.component';
import { ComponentTestComponent } from './components/component-test/component-test.component';
import { SecondComponentTestComponent } from './components/second-component-test/second-component-test.component';
import { RootingService } from './services/rooting.service';



const routes: Routes = [
  { path: 'first-direction/:id', component: ComponentTestComponent },
  { path: 'second-direction/:id', component: SecondComponentTestComponent, outlet: "secondRouter" },
];

@NgModule({
  declarations: [
    ComponentTestComponent,
    ContainerTestComponent,
    SecondComponentTestComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [ContainerTestComponent],
  providers: [RootingService]
})
export class AppRoutingModule { }
