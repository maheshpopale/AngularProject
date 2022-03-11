import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
myOrders:any[]=[];
  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.getMyOrders();
  }
  // get Order of purticular user
  getMyOrders(){
    const id=parseInt(localStorage.getItem("id"));
    this.ordersService.getMyOrders(id).subscribe(response=>{
      this.myOrders=response;
      console.log(response);
    });
  }
    

}
