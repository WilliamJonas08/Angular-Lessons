import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltipExported'
  // Doit être utilisé avec un #template Ref in our component
  // Permet de controler la diretive de l'intérieur du component
})
export class TooltipDirective implements OnInit {

  toolTipElement = document.createElement('span');
  // visible=false?

  @Input()
  set tooltip(value) {
    this.toolTipElement.textContent = value
  }

  hide() {
    this.toolTipElement.setAttribute("style",'display: none ; background-color: grey; color:white;')
    // this.toolTipElement.classList.remove('tooltip--active')
  }

  show() {
    // this.toolTipElement.classList.add('tooltip--active')
    this.toolTipElement.setAttribute("style",'display: ; background-color: grey; color:white;')
  }

  constructor(private element: ElementRef) { }
  // this.element refers to the DOM element where the template ref have been injected
  // this.toolTipElement refers to the div we created

  ngOnInit() {
    // this.toolTipElement.className = 'tooltip' 
    this.hide() //Initialisation
    this.element.nativeElement.appendChild(this.toolTipElement)
    this.element.nativeElement.classList.add('tooltip-container')
  }

}
