import { Component, AfterContentInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, AfterContentChecked, ChangeDetectorRef, ComponentRef } from '@angular/core';

// On importe le child component pour pouvoir le créer dynamiquement avec une Factory
import { ChildComponent } from '../../components/child/child.component';

@Component({
  selector: 'app-dynamic-component-generation',
  templateUrl: './dynamic-component-generation.component.html',
  styleUrls: ['./dynamic-component-generation.component.scss']
})
export class DynamicComponentGenerationComponent implements AfterViewInit {

  // Création dynamique du child component
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef; // TODO read ?

  component: ComponentRef<ChildComponent> // usefull to access this component outside the ngAfterContentInit (like for destroying it)

  constructor(
    private resolver: ComponentFactoryResolver, // Create a componement factory based on our child component
    private cd: ChangeDetectorRef
  ) { }

  // After ContentInit instead of view init because we can change subscriptions,data, ... before the view is initialised
  // PROBLEME: devrait fonctionner avec afterContentInit car sinon problème de check après attribution !
  ngAfterViewInit(): void {

    // GENERATE THE COMPONENT
    const childComponentFactory = this.resolver.resolveComponentFactory(ChildComponent) // Function tha resolves the component
    this.entry.createComponent(childComponentFactory).instance.title = "Dynamically generated Child Component 1" //Component test
    this.component = this.entry.createComponent(childComponentFactory, 0) // Once we have the component's factory, we just create this component
    // 0 is the index to create a specific order of generation between these two components that have been generated

    // PASS DYNAMIC DATA INTO COMPONENT : Modifying component properties (we don't have to set Input property in this component)
    this.component.instance.title = "Dynamically generated Child Component 2"

    // SUBSCRIPTIONS to this component properties (like Output):
    // this.component.instance.OUTPUT_NAME.subscribe((...)=>{...})

    this.cd.detectChanges() //Permet d'empecher l'affichage de l'erreur "modified after checked" et ainsi d'afficher les autres propriétés du composant (par exemple celle lées à #inputRef)
  }

  destroyComponent() {
    this.component.destroy()
    console.log("Destroying component..")
  }

  // REORDERING COMPONENTS : Move a component after compile time
  moveComponent() {
    this.entry.move(this.component.hostView, 1)
  }

  handleCheck(value: boolean) {
    console.log(value)
  }
}

/**
 * Création dynamique d'un composant:
 *  - ViewChild/ ViewContainerRef
 *  - Component Factory Resolver
 *  - Create component
 *  - PAS OBLIGE VISIBLEMENT ngModule: enable the component to be dynamically created (not only in "declarations" but also in the "entryComponents" parameter)
 */
