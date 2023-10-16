import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InventoryRoutingModule} from './inventory-routing.module';
import { ProductsComponent } from './products/products.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    ProductsComponent,
    AddItemsComponent,
    CategoryComponent
  ],
  imports: [
    InventoryRoutingModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule

  ],
  exports: [
    ProductsComponent,
    AddItemsComponent,
    CategoryComponent
  ]
})
export class InventoryModule {}