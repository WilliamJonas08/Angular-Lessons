import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(size:number, extension:string="MB") {
    return (size/(1024*1024)).toFixed(2)+ extension;
    // toFixed permet de limiter le nombre de décimales après la virgule
  }

}
