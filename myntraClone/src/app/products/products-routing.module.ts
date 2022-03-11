import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from '../auth-gaurd.service';
import { AuthInterceptor } from '../authInterceptor';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {path:'addProduct',component:AddProductComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'allProducts',component:ListProductsComponent},
  {path:'viewProducts',component:ViewProductsComponent},
  {path:'deleteProduct/:id',component:DeleteProductComponent},
  {path:'bycategory/:id',component:ProductByCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},AuthGaurdService]
})
export class ProductsRoutingModule { }
