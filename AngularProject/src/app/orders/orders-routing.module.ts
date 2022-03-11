import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllordersComponent } from './allorders/allorders.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrderComponent } from './order/order.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'checkout',component:OrderComponent},
  {path:'order',component:PlaceOrderComponent},
  {path:'success',component:SuccessComponent},
  {path:'allorders',component:AllordersComponent},
  {path:'myorders',component:MyordersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
