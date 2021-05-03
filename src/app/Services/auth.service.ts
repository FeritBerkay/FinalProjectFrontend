import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginModel } from '../Models/loginModul';
import { SingleResponseModule } from '../Models/singleResponseModule';
import { tokenModel } from '../Models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44369/api/auth"
  constructor(private httpClient:HttpClient) { }
  login(loginModel:loginModel){
    return this.httpClient.post<SingleResponseModule<tokenModel>>(this.apiUrl+ "/login", loginModel)
  }
  //amac gelen tokenlerı tutmak neden mi cunku sen web de f5 attıgın zaman hersey temizlernir yani tu response lar gider.
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
