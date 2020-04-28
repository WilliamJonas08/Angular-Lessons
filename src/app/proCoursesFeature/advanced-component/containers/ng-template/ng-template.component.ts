import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements AfterViewInit {

  context =  {
    $implicit: "William Jonas", //gives information to the implicit value mentionned in the template
    data: "Centrale Marseille"
  }

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef; 
  
  @ViewChild('template') template: TemplateRef<any>;

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.entry.createEmbeddedView(this.template, this.context)
    // EmbeddedView car il s'agit d'un template que l'on va insérer dans la div #entry
    // The object in the createEmbeddedView function enable us to pass contexte/data into our template

    this.cd.detectChanges()
  }

}
/**
 * What is the utility ?
 */