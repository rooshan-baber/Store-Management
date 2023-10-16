import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingRoutingModule } from './billing-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { BillComponent } from './bill/bill.component';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrdersComponent,
    BillComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    OrdersComponent,
    BillComponent
  ]
})
export class BillingModule { }
