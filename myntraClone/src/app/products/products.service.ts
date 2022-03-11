import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './IProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/app/products";

  //get all products
  getProducts():Observable<any>{
    return this.http.get<any>('https://localhost:44351/api/products');
  }
  //get products by category
  productsByCategory(id:number):Observable<any>{
    return this.http.get<any>('https://localhost:44351/api/products/categories/'+id);   
  }
  //add Product
  addProduct(product:any):Observable<any>{
    console.log(product);
    const headers = { 'content-type': 'application/json'};
    return this.http.post('https://localhost:44351/api/products',product,{headers:headers});
  }
  //get product by id
  getProduct(id:number):Observable<IProduct>{
    console.log(id);
    return this.http.get<IProduct>('https://localhost:44351/api/products/'+id);
  }
//update Product
  updateProduct(id:number,productName:string,productQuantity:number,productPrice:number,productDescription:string,image:string,CategoryId:number,){
    const product={id:id,productName:productName,productQuantity:productQuantity,productPrice:productPrice,productDescription:productDescription,image:image,CategoryId:CategoryId};
      console.log(product);
    return this.http.put(`https://localhost:44351/api/products/`,product);
  }
  //delete Product
  deleteProduct(id:number):Observable<IProduct>{
    console.log(id);
    return this.http.delete<IProduct>('https://localhost:44351/api/products/'+id);
  }
}
