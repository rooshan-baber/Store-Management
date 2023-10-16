import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {AddItemsComponent} from './add-items/add-items.component';
import { CategoryComponent } from './category/category.component';

const routes:Routes=[
    {path:'products',component:ProductsComponent},
    {path:'additem',component:AddItemsComponent},
    {path:'category',component:CategoryComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
