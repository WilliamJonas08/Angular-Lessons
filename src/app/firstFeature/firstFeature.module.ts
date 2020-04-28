import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

//Containers
import { TemplateFundamentalsComponent } from './containers/template-fundamentals/template-fundamentals.component';
import { RenderingFlowsComponent } from './containers/rendering-flows/rendering-flows.component';
import { ComponentArchitectureAndFeatureModulesComponent } from './containers/component-architecture-and-feature-modules/component-architecture-and-feature-modules.component';
import { PlantViewerComponent } from './containers/plant-viewer/plant-viewer/plant-viewer.component';

// Components
import { PlantCountComponent } from './components/plant-count/plant-count.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantFormComponent } from './components/plant-form/plant-form/plant-form.component'

// Services
import { FirstFeatureService } from './first-feature.service';

const routes: Routes = [
  {
    path: 'plants',
    // on définit les routes complémentaires à "/plants"
    children: [
      { path:'', component: ComponentArchitectureAndFeatureModulesComponent},
      { path:':id', component: PlantViewerComponent}
    ],
  }];

@NgModule({
  // Liste les composants utilisés par ce module
  declarations: [
    TemplateFundamentalsComponent,
    RenderingFlowsComponent,
    ComponentArchitectureAndFeatureModulesComponent,
    PlantCountComponent,
    PlantDetailComponent,
    PlantViewerComponent,
    PlantFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    // Permet de définir les routes propres à chaque module
    RouterModule.forChild(routes),
  ],
  // Permet d'utiliser des components dans d'autres modules
  exports: [
    TemplateFundamentalsComponent,
    RenderingFlowsComponent,
    ComponentArchitectureAndFeatureModulesComponent,
    PlantViewerComponent,
  ],
  // Permet de référencer les services 
  // QUESTION : et quoi d'autre ?
  providers: [
    FirstFeatureService,
  ],
  // Question: A quoi sert le bootstrap ?
  bootstrap: [],
})
export class firstFeatureModule { }