import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  getProductList()
  {
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any,pQuantity:number,pSize:string){
    const _product={product:product,quantity:pQuantity,pSize:pSize};
    console.log(_product);
    this.cartItemList.push(_product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    //console.log(this.cartItemList);
  }
  getTotalPrice():number {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
        const q:number=parseInt(a.quantity);
        console.log(q);
        grandTotal+=a.product.productPrice*q;
    });
    return grandTotal;

  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id==a.id){
        this.cartItemList.splice(index,1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
  
  //addCartData to database
  insertCart(productName:string,productPrice:number,productQuantity:number,userId:number){
    const cartItem={productName:productName,productPrice:productPrice,productQuantity:productQuantity,userId:userId};
    console.log(cartItem);
    // return this.http.post('http://localhost:3000/app/cartitems/add/',cartItem);
  }
}
