import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  userData:any[]=[];
  public userDetails=new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  getUserDetails(){
    return this.userDetails.asObservable();
  }
  order(userId:number){
    const order={userId:userId};
    console.log(order);
    return this.http.post('https://localhost:44351/api/orders/order',order);
  }
  getOrderDetails():Observable<any>{
    return this.http.get('https://localhost:44351/api/orders/orderid');
  }
  getDetails(firstName:string,lastName:string,email:string,address:string,city:string,state:string,zip:string,paymentType:string){
    const userDetails={firstName:firstName,lastName:lastName,email:email,address:address,city:city,state:state,zip:zip,paymentType:paymentType};
    this.userData.push(userDetails);
    this.userDetails.next(this.userData);
    // console.log(userDetails);
  }

  placeOrder(firstName:string,lastName:string,email:string,address:string,city:string,state:string,zip:string,paymentMethod:string,
    productId:number,productQuantity:number,productPrice:number,
    orderId:number,size:string):Observable<any>{

    const order={firstName:firstName,lastName:lastName,email:email,address:address,
                city:city,state:state,zip:zip,paymentMode:paymentMethod,
                productQuantity:productQuantity,productPrice:productPrice,
                orderStatus:"Pending",
                productId:productId,
                orderId:orderId,
                size:size
              };
                console.log(order);
                return this.http.post('https://localhost:44351/api/orders',order);
                
    }
    getAllOrders():Observable<any>{
      return this.http.get<any>('https://localhost:44351/api/orders');
    }

    //Accept User's Order
    acceptOrder(id:number):Observable<any>{
      console.log(id);
      return this.http.get<any>(`https://localhost:44351/api/orders/${id}`);
    }
    //Delete Order
    deleteOrder(id:number):Observable<any>{
      return this.http.delete('https://localhost:44351/api/orders/'+id);
    }

    //Getting orders of a particular user
    getMyOrders(id:number):Observable<any>{
     return this.http.get('https://localhost:44351/api/orders/userorders/'+id);
    }

}
