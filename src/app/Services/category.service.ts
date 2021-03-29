import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';
import { ListResponseModule } from '../Models/listResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl="https://localhost:44369/api/categories/getall"
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModule<Category>>{
    return this.httpClient.get<ListResponseModule<Category>>(this.apiUrl)
  }
}
