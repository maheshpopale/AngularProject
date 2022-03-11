import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/auth/users/users.service';
import { CartService } from 'src/app/cart/cart.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  checkoutForm:FormGroup
  public productsList:any[]=[];
  orderDetails:any[]=[];
  grandTotal=0;
  result=[];
  user:any
  checked=true;
  constructor(private cartService:CartService,private formBuilder:FormBuilder,private orderService:OrdersService,private route:Router,private usersService:UsersService) {
  this.cartService.getProductList().subscribe(data=>{
      this.productsList=data;
      // console.log(this.productsList);
      this.grandTotal=this.cartService.getTotalPrice();
      const id=parseInt(localStorage.getItem("id"));
      this.usersService.getUser(id).subscribe(res=>{
        this.user=res;
        console.log(this.user);
      })
    });
   }

  ngOnInit(): void {
    this.checkoutForm=new FormGroup({
        firstName:new FormControl(null,{validators:Validators.required}),
        lastName:new FormControl(null,{validators:[Validators.required]}),
        email:new FormControl({Validators:[Validators.required,Validators.email]}),
        address:new FormControl({Validators:[Validators.required]}),
        city:new FormControl({Validators:[Validators.required]}),
        state:new FormControl({Validators:[Validators.required]}),
        zip:new FormControl({Validators:[Validators.required]}),
        paymentType:new FormControl({Validators:[Validators.requiredTrue]}),
    });
  }
  addUserDetail(){
    console.log(this.checkoutForm.value);
    let userId=parseInt(localStorage.getItem("id"));
    console.log(userId);
    this.orderService.order(userId).subscribe(data=>{
      console.log(data);
    });
 
    this.orderService.getDetails(this.checkoutForm.value.firstName,
        this.checkoutForm.value.lastName,
        this.checkoutForm.value.email,
        this.checkoutForm.value.address,
        this.checkoutForm.value.city,
        this.checkoutForm.value.state,
        this.checkoutForm.value.zip,
        this.checkoutForm.value.paymentType
      );
      this.route.navigate(['/order']);
  
  }

  }
