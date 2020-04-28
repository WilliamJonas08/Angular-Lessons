import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor][myForOf]'
})
export class MyForDirective {

  @Input()
  set myForOf(collection){
    this.view.clear() // rebuilding all the view when modified (avoid errors)
    collection.forEach((item, index)=>{
      this.view.createEmbeddedView(this.template,{
        $implicit:item,
        index:index
      })
    })
  }
  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) { }

}
