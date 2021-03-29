import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Product[] = [];
  dataloaded = false;
   //private yaparsa sadece bu classde gecerli. Yani product.httpClient yazılamaz.
  constructor(private productsService:ProductService, private activatedRoute:ActivatedRoute) { }
  //Ctor yapısı calısınca direk calısır. Ama ctor yaısı sadece insalitize etmek icin kullanılan bir yapı. Newleme yapılır burayla karıstırma ama mantık ozunde benzer.
  //ngonit component i don yerleştirir.
  ngOnInit(): void {
    //Assagıdaki kodta routurımızda categoryId varmı diye baktık eger varsa categoriye gore getir dedik. Yoksa dumduk getir.
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
          this.getProductsyCategoryId(params["categoryId"])
      }
      else{
        this.getProducts();
      }
    })
  }
 //Postamndakini buraya yapıyorsun. Apıye baglandık. 
  getProducts(){
    //subscribe asenkron calışır. Kendi icinde senkron.Icındeki kısma erişebilmek icin.
    this.productsService.getProducts()
    .subscribe(response=>{
      this.products = response.data;
      this.dataloaded=true; 
    });
  }
  getProductsyCategoryId(categoryId:number){
    //subscribe asenkron calışır. Kendi icinde senkron.
    this.productsService.getProductsByCategoryId(categoryId)
    .subscribe(response=>{
      this.products = response.data;
      this.dataloaded=true; 
    });
  }
}
