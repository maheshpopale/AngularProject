import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddCategoriesComponent } from './_categories/add-categories/add-categories.component';
import { UpdateCategoriesComponent } from './_categories/update-categories/update-categories.component';
import { ViewCategoriesComponent } from './_categories/view-categories/view-categories.component';
import { DeleteCategoriesComponent } from './_categories/delete-categories/delete-categories.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SliderComponent } from './layout/slider/slider.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CartModule } from './cart/cart.module';
import { CartRoutingModule } from './cart/cart-routing.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { UsersRoutingModule } from './auth/users/users-routing.module';
import { UsersModule } from './auth/users/users.module';
import { AdminModule } from './auth/admin/admin.module';
import { AdminRoutingModule } from './auth/admin/admin-routing.module';
import { DashboardComponent } from './auth/admin/dashboard/dashboard.component';
import { JwtModule,JWT_OPTIONS} from '@auth0/angular-jwt';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/users/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './authInterceptor';
import { AuthGaurdService } from './auth-gaurd.service';
import { NgxPaginationModule } from 'ngx-pagination';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    AddCategoriesComponent,
    UpdateCategoriesComponent,
    ViewCategoriesComponent,
    DeleteCategoriesComponent,
    HeaderComponent,
    SidebarComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CartModule,
    ProductsModule,
    CartRoutingModule,
    OrdersModule,
    UsersRoutingModule,
    UsersModule,
    AdminModule,
    AdminRoutingModule,
    JwtModule,
    NgxPaginationModule,
    MatButtonModule
    // RouterModule.forRoot([
     
    // {path:'login',component:LoginComponent},
    // ]),
    
    // JwtModule.forRoot({
    //   config:{
    //     tokenGetter:tokenGetter,
    //     allowedDomains:["localhost:44351"],
    //     disallowedRoutes:[]
    //   }
    // })
  ],
  exports:[NgxPaginationModule,MatButtonModule],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
