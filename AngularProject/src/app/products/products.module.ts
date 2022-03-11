import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AddProductComponent,
    UpdateProductComponent,
    ListProductsComponent,
    DeleteProductComponent,
    ViewProductsComponent,
    ProductByCategoryComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    AddProductComponent,
    UpdateProductComponent,
    ProductComponent,
    ListProductsComponent,
    DeleteProductComponent,
    ViewProductsComponent,
    ProductByCategoryComponent,
    NgxPaginationModule
  ],
  providers:[ProductsService]
})
export class ProductsModule { }
