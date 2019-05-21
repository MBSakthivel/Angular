import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortnumber'
})
export class SortnumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args == "dsc") {
      return value.sort((a, b) => b - a);
    }
    else if (args == "asc") {
      return value.sort((a, b) => a - b);
    }
    else {
      return value;
    }
  }
}
