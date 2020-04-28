import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppRoutingModule } from './rootingFeature/app-routing.module';

import { AppComponent } from './app.component';
// Pourraient être présents uniquement dans le rooting-module ?
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-fount.component';

import { firstFeatureModule } from './firstFeature/firstFeature.module';
import { ProCoursesModule } from './proCoursesFeature/proCourses.module';
import { AppRoutingModule } from './rootingFeature/app-routing.module';





const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // Applying redirection
  // {path:'**', redirectTo:'plants' }
  { path: '**', component: NotFoundComponent }
  // '**' :Route générique quand la route mentionée n'existe pas (récupérer les erreurs 404)
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, { enableTracing: true }),
    CommonModule,
    
    AppRoutingModule,  // POSSIBILITÉ DE SUPPRIMER
    // Custom Modules
    firstFeatureModule,
    ProCoursesModule.forRoot('http://localhost:3000/'), //argument passé pour configurer dynamiquement le proCoursesModule
  ],
  providers: [],
  // Question: A quoi sert le bootstrap ?
  bootstrap: [AppComponent]
})
export class AppModule { }
