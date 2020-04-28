import { Component, ContentChild, AfterContentInit, ContentChildren, QueryList, ViewChild, AfterViewInit,ViewChildren, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';

// Importé pour y avoir accès via le décorateur ContentChild
import { BindedChildComponent } from '../binded-child/binded-child.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit, AfterViewInit {

  title:string = 'Child Component'

  showMessage: boolean

  // To select DOM element via its #ref
  @ViewChild("inputRef") inputRef: ElementRef;


  @ViewChild(MessageComponent) message: MessageComponent
  // @ViewChildren(MessageComponent) messageList: QueryList<MessageComponent>


  // Enable queries on injected content
  @ContentChild(BindedChildComponent) checkbox: BindedChildComponent
  // checkbox n'est pas un DOM element mais une instance de "BindedChildComponent" (on peut accéder à ses propriétés directement)

  // @ContentChildren(BindedChildComponent) checkboxList: QueryList<BindedChildComponent>
  // Nécessite d'avoir inséré plusieurs fois le composant dans le template du GLOBAL COMPONENT ( sinon useless )



  constructor(private cd: ChangeDetectorRef, private renderer:Renderer2) { }

  // Used for subscriptions
  ngAfterViewInit() {

    // RENDERER
    // À utiliser de préférence (par rapport aux méthodes NativeElement) car il s'adapte mieux aux différents types d'appareils tels que applications mobiles etc...
    this.renderer.setProperty(this.inputRef.nativeElement,"placeholder", "#inputRef element")
    this.renderer.addClass(this.inputRef.nativeElement,"classTest")


    // ELEMENTREF CHILD

    // this.inputRef.nativeElement.setAttribute('placeholder', " #inputRef element ")
    // this.inputRef.nativeElement.classList.add("classTest") //Ajoute une class
    this.inputRef.nativeElement.focus() //Permet de le focus lors de la génération de ce DOM element
    // Bien remarquer l'utilisation de nativeElement


    // VIEWCHILD

    // console.log("AfterViewInit", this.message)
    // this.message.days = 51    //Error not displayed in production mode
    // this.cd.detectChanges();


    // VIEWCHILDREN

    // View ChildREN can only be used on the ngAfterViewInit
    // if(this.message){
    //   // setTimeout(()=>{
    //     this.messageList.forEach((message)=>{
    //       message.days=51
    //     })
    //     // this.cd.detectChanges();
    //   // })


    //   /** 2 solutions to avoid "Expression has changed after it was checked" (c'est une erreur qui n'apparait pas en production):
    //    *  - set Timeout
    //    *  - use ChangeDectectorRef to mutute data after the view has been completed (ce n'est pas une solution recommandée forcément)
    //    */ 
    // }
  }

  ngAfterContentInit(): void {
    if (this.message) {
      // console.log("AfterContentInit", this.message)
      // used to change particular data
      this.message.days = 51
      // PROBLEME : devrait fonctionner ici sans "Expression has changed after it was checked"
    }

    if (this.checkbox) {
      // on vérifie que l'on a bien accès aux données du BindedChildComponent
      this.checkbox.checked.subscribe((checked: boolean) => this.showMessage = checked)
      // on subscribe aux changements de l'output "checked" du "BindedChildComponent" (comme si on interceptait ses échanges avec le GlobalComponent)

      // Cas ContentChildren:
      // this.checkboxList.forEach((item)=>{
      //   item.checked.subscribe((checked:boolean)=> this.showMessage=checked)
      // })
    }
  }
  // NgAfterContentInit called before ngAfterViewInit

}
