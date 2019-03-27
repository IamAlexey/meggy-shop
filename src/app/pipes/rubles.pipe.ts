import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rubles'
})
export class RublesPipe implements PipeTransform {

  transform(value: string): string {
    return value.substr(0, value.length - 2);
  }

}
