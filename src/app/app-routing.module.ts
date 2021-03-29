import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [
  //path arama cubuguna yazdıgın deger. bos ise default olarak ne donsundur. products ise sonunda products ekleyince ne donecegi. 
  //pathmatch full ana sayfa ile eşit olucak başka bir sayfa acılınca olmasın yani sen aslında products yazdıgında da bosu kapsar.
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
