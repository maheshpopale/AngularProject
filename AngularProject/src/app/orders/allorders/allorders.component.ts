import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {
orders:any[]=[];
  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getAllOrders().subscribe(orders=>{
      this.orders=orders;
      console.log(orders);
    })
    }
    //Accept User's Order
    acceptOrder(id:any){
      console.log(id);
      this.ordersService.acceptOrder(id)
      .subscribe(response=>{
        console.log(response);
      });
    }

    //Delete Order
    deleteOrder(id:number){
      var status=confirm("Are You sure want to Delete Order");
      if(status){
        this.ordersService.deleteOrder(id).subscribe(response=>{
          console.log(response);
        });
      }
    }

}
