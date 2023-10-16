import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersComponent} from './orders/orders.component';
import {BillComponent} from './bill/bill.component';
import {zoomIn} from '../animations'
const routes: Routes = [
  {path:'bill',  data:{animation:'zoomIn'},component: BillComponent},
  {path:'order', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
