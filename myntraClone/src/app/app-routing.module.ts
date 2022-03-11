import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './auth-gaurd.service';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ProductByCategoryComponent } from './products/product-by-category/product-by-category.component';
import { ProductComponent } from './products/product/product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';
import { AddCategoriesComponent } from './_categories/add-categories/add-categories.component';
import { DeleteCategoriesComponent } from './_categories/delete-categories/delete-categories.component';
import { UpdateCategoriesComponent } from './_categories/update-categories/update-categories.component';
import { ViewCategoriesComponent } from './_categories/view-categories/view-categories.component';


const routes: Routes = [
 {path:'addCategory',component:AddCategoriesComponent},
 {path:'updateCategory/:id',component:UpdateCategoriesComponent},
 {path:'viewCategories',component:ViewCategoriesComponent},
 {path:'deleteCategory/:id',component:DeleteCategoriesComponent},
 {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
