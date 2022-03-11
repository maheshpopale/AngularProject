import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products:any[]=[];
  pQuantity:any;
  productName:any;
  page:string|number=1;
  totalRecords:string|number;
  maxSize:string="10";
    constructor(private productService:ProductsService,private cartService:CartService) { }
  
    ngOnInit(): void {
      //calling getProducts()
      this.getProducts();
    }
    //get products()
    getProducts(){
      this.productService.getProducts().subscribe(data=>{
        this.products=data;
        this.totalRecords=data.length;
        console.log(this.products);
        this.products.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.productPrice})
        })
      });
    }
    search(){
      if(this.productName==""){
        this.ngOnInit();
      }
      else{
        this.products=this.products.filter(res=>{
          return res.productName.toLocaleLowerCase().match(this.productName.toLocaleLowerCase());
        });
      }
    }
    // //add to cart
    // addtoCart(product:any,pQuantity:number){
    //     // console.log(pQuantity);
    //    this.cartService.addtoCart(product,pQuantity);
    // }

}
