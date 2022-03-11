import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/_categories/categories.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
categories:any;
isAdded=false
file:File;
image:string;
imagePreview:string;
public productForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private categoryService:CategoriesService,private productsService:ProductsService,private http:HttpClient) {
    this.productForm=new FormGroup({
      productName:new FormControl(null,{validators:Validators.required}),
      productCategory:new FormControl(null,{validators:[Validators.required]}),
      productQuantity:new FormControl({Validators:[Validators.required]}),
      productPrice:new FormControl({Validators:[Validators.required]}),
      productDescription:new FormControl({Validators:[Validators.required]}),
      image:new FormControl({Validators:[Validators.required]})
    })
    //calling getCategories()
    this.getCategories();
   }
   handleImageFile(e:Event){
      const file = (<HTMLInputElement>e.target).files[0];
      const path=file.name;
      this.image=`../../../assets/${path}`;
      console.log(this.image);
      this.productForm.patchValue({image:file})
      this.productForm.get('image').updateValueAndValidity();
      const reader=new FileReader();
      reader.onload=()=>{
          this.imagePreview=reader.result as string;
      };
      reader.readAsDataURL(file);
   }
   //get Categories
   getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    });
   }

  ngOnInit(): void {
  }
  addProduct(){
    //const image=this.imagePreview;
    // console.log(this.image);
    const product={productName:this.productForm.value.productName,
      productQuantity:this.productForm.value.productQuantity,
      productPrice:this.productForm.value.productPrice,
      productDescription:this.productForm.value.productDescription,
      image:this.image,
      CategoryId:this.productForm.value.productCategory
    };
    this.http.post('https://localhost:44351/api/products/',product).subscribe(data=>{
      if(data!=null)
      this.isAdded=true;
      console.log(data);
    });
    this.productForm.reset();
  }

}
