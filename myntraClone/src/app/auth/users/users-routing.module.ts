import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from 'src/app/products/list-products/list-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  {path:'signup',component:RegisterComponent},
  {path:'signin',component:LoginComponent},
  {path:'allusers',component:ViewUsersComponent},
  //{path:'',redirectTo:'allProducts',pathMatch:'full'},
  //{path:'allProducts',component:ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
