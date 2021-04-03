import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  //Degisime ugramasını istedigim data product[].  
  transform(value: Product[], filterText:string): Product[] {
    //Girilen deger kucuk harf yap. Urunlerin filitrele. Her bir urunun harflerini kucult. Herbir unurun harfi  filtext icinde varmı diye bakılıyor. Filtertext yoksa degeri direk dondur.
    filterText:filterText? filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
