import { Injectable } from '@angular/core';
import { CartItem } from '../Models/cartItem';
import { CartItems } from '../Models/cartItems';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    //Elemanı buluyor. Find tek tek dolasır.
    let item = CartItems.find(c=>c.product.productId===product.productId);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity =1;
      CartItems.push(cartItem)
    }
  }
  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
    //Splice nereden itibaren silicegimizi gosterir. Yani item indexınden sonra 1 tane sil.
    CartItems.splice(CartItems.indexOf(item),1)
  }

  list():CartItem[]{
    return CartItems;
  }
}
