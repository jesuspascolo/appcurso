import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroformater'
})
export class EuroformaterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const euro = value + ' €';
    return euro;
  }

}
