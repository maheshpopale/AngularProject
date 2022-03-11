import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { AllordersComponent } from './allorders/allorders.component';
import { MyordersComponent } from './myorders/myorders.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    OrderComponent,
    PlaceOrderComponent,
    SuccessComponent,
    AllordersComponent,
    MyordersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule
  ],
  exports:[OrderComponent,
          PlaceOrderComponent,
          SuccessComponent,
          AllordersComponent,
          MyordersComponent
]
})
export class OrdersModule { }
