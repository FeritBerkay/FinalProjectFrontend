import { Component } from '@angular/core';
//Component html in datasını yonettigimiz yer. Componentin component oldugunu selector ve devamı ile veriyoruz. Kurllanacı url de bizim html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //:string normal de javascripte yoktur cunku  jstypesız da calısır ancak biz typescrip ile calıstıgımız icin veriyoruz. Yani type koruyoruz.
  title:string = 'northwind';
  user:string='Ferit';
  //camelCase
}
