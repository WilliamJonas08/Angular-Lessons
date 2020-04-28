import { Component, OnInit } from '@angular/core';

import { FileSizePipe } from '../../pipes/file-size.pipe'; //Only usefull when we use pipe as a provider

interface File{
  name:string,
  size:any //Because the pipe function also returns a string
}

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
  providers:[
    FileSizePipe //Only usefull when we use pipe as a provider
  ]
})
export class PipeComponent implements OnInit {

 files:File[]
 mapped:File[]

 constructor(private fileSizePipe:FileSizePipe){}  //Only usefull when we use pipe as a provider

  ngOnInit(): void {
    this.files=[{
      name:"logo.svg",
      size:2120109,
    },{
      name:"banner.jpg",
      size:18029,
    },{
      name:"background.pnj",
      size:1784562,
    }]

    // Using pipe as a function
    this.mapped=this.files.map(file=>{
      return{
        name:file.name,
        size:this.fileSizePipe.transform(file.size, 'mb')
      }
    })
  }

}
