import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators'

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Lessons';

  // mettre un slash dans l'url remplace tout l'url actuel par celui écris alors que juste écrire dynamicgen ajoutera dynamicgen après pro-courses
  nav: Nav[] = [{
    link: "/",
    name: "Home",
    exact: true
  }, {
    link: "/plants",
    name: "Fondamentaux",
    exact: false
  }, {
    link: "/pro-courses",
    name: "Pro",
    exact: false
  }, {
    link: "/ooops",
    name: "404",
    exact: false
  }]

  // Par contre la router link nécessite d'insérer l'url totale
  proNav: Nav[] = [{
    link: "/pro-courses/advanced-component",
    name: "Advanced Component",
    exact: false
  }, {
    link: "/pro-courses/directive",
    name: "Directives",
    exact: false
  }, {
    link: "/pro-courses/pipe",
    name: "Pipes",
    exact: false
  }, {
    link: "/pro-courses/reactive-forms",
    name: "Reactive Forms",
    exact: false
  }, {
    link: "/pro-courses/routing",
    name: "Routing",
    exact: false
  }, {
    link: "/pro-courses/state-management",
    name: "State Management RXJS",
    exact: false
  }]
  
  proNavAdvancedComponent: Nav[] = [{
    link: "/pro-courses/advanced-component/child-content",
    name: "Child Content",
    exact: false
  }, {
    link: "/pro-courses/advanced-component/dynamic-gen",
    name: "Dynamic generation of child-component",
    exact: false
  }, {
    link: "/pro-courses/advanced-component/ng-template",
    name: "Ng Template",
    exact: false
  }, {
    link: "/pro-courses/advanced-component/view-encapsulation",
    name: "View Encapsulation",
    exact: false
  }, {
    link: "/pro-courses/advanced-component/change-detection",
    name: "Change Detection",
    exact: false
  }]

  proNavDirective: Nav[] = [{
    link: "/pro-courses/directive/building-directive",
    name: "Building a directive",
    exact: false
  }, {
    link: "/pro-courses/directive/custom-directive",
    name: "Custom structural directive",
    exact: false
  }]

  // Connaitre les liens actifs
  navClique: string = " "
  proNavClique: string = " "

  constructor(private router: Router) { }

  ngOnInit() {
    //  Router events subscription
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event)=> console.log(event))
    // Désactiver la ligne suivante dans app.module pour voir le filtre fonctionnel
    // RouterModule.forRoot(routes, { enableTracing: true }),

  }

  navClick(name: string) {
    this.navClique = name
  }
  proNavClick(name: string) {
    this.proNavClique = name
  }
}

/**
 * 
<div>
  {{ title}}
</div>
<nav class="nav">

  <!-- Global nav Bar -->
  <div class="navbar">
    <a *ngFor="let item of nav" [routerLink]="item.link" routerLinkActive="active"
      [routerLinkActiveOptions]="{exact:item.exact}" (click)="navClick(item.name)">{{item.name}}</a>
    <!-- routerLinkActive : permet de d'ajouter "active" à la class du a tag et donc de connaitre le lien actif -->
    <!-- routerLinkActiveOption avec exact true: permet de connaitre exactement la classe active car il peut y avoir confusion avec l'url redirigée vers 404 -->
  </div>

  <!-- Barre PRO -->
  <div *ngIf="navClique ==='Pro'" class="navbar">
    <a *ngFor="let item of proNav" [routerLink]="item.link" routerLinkActive="active"
      (click)="proNavClick(item.name)">{{item.name}}</a>
  </div>

  <!-- Sous éléments PRO -->
  <div *ngIf="(proNavClique ==='Advanced Component')&&(navClique ==='Pro')" class="navbar">
    <a *ngFor="let item of proNavAdvancedComponent" [routerLink]="item.link" routerLinkActive="active">{{item.name}}</a>
  </div>
  <div *ngIf="(proNavClique ==='Directives')&&(navClique ==='Pro')" class="navbar">
    <a *ngFor="let item of proNavDirective" [routerLink]="item.link" routerLinkActive="active">{{item.name}}</a>
  </div>

</nav>

<router-outlet></router-outlet>
 */