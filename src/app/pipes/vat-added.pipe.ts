import { Pipe, PipeTransform } from '@angular/core';

//Pipe elimizdeki veriyi farklı sekilde gosterebilmeye yarar.
@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  //value degstirmek istedigim yer. Rate ise parametrem.
  transform(value: number, rate:number): number {
    return value + (value * rate/100);
  }

}
