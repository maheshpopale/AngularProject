import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { CategoriesService } from 'src/app/_categories/categories.service';
import { ICategory } from 'src/app/_categories/ICategory.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
navbardisplay=true;
public totalItems:number=0;
categories:any[]=[];
  constructor(private cartService:CartService,private categoryService:CategoriesService,private router:Router) { }

  ngOnInit(): void {
     this.getproductsLength();
     this.getCategories();
  

  }
  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
      console.log(this.categories);
    })
  }
   getproductsLength()
   {
     this.cartService.getProductList().subscribe(res=>{
     this.totalItems=(res.length);
     console.log(res);
       })
   }
  //  showNavbar(show:boolean){
  //    this.navbardisplay=show;
  //  }
}
