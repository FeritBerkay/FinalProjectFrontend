import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
import { ListResponseModule } from '../Models/listResponseModule';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   //private yaparsa sadece bu classde gecerli. Yani product.httpClient yazılamaz.
   apiUrl="https://localhost:44369/api/"
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModule<Product>>{
    let newPath= this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModule<Product>>(newPath)
  }
  getProductsByCategoryId(categoryId:number):Observable<ListResponseModule<Product>>{
    let newPath= this.apiUrl + "products/getByCategoryId?categoryId="+categoryId
    return this.httpClient.get<ListResponseModule<Product>>(newPath)
  }
}
