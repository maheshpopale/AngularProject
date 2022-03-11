import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
id:number=0;
pQuantity=0;
pSize='';
product:any;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductsService,private cartService:CartService) { 
    this.activatedRoute.paramMap.subscribe(data=>{
      this.id=+data.get('id');
      console.log(this.id);
    });
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProduct(this.id).subscribe(data=>{
      this.product=data;
      // console.log(data);
    })
  }
  addToCart(product:any,pQuantity:number,pSize:string){
    this.cartService.addtoCart(product,pQuantity,pSize);

  }
}
