import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import{MatCardModule} from '@angular/material/card';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  providers:[CartService],
  exports:[CartComponent]
})
export class CartModule { }
