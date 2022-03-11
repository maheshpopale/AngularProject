import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
id:number=0;
  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService) { 
    this.activatedRoute.paramMap.subscribe(data=>{
      this.id=+data.get('id');
      //console.log(this.id);
    });
  }

  ngOnInit(): void {
    this.deleteProduct();
  }
  //delete Product
  deleteProduct(){
    this.productsService.deleteProduct(this.id).subscribe(data=>{
      // console.log(data);
      if(data){
        alert('Product Deleted Successfully');
      }
    });
  }

}
