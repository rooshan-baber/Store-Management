import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import {WildcardComponent} from './wildcard/wildcard.component';
import {AuthGuardGuard} from './common/auth-guard.guard';
const routes:Routes=[
  {path:'',pathMatch:'full', redirectTo: 'inventory/products',},
  { path: 'login', component: LoginComponent,},
  { path: 'signup', component: SignupComponent,},
  {
    path: '',
    component: HeaderComponent,data:{animation:'zoomIn'},
     canActivate:[AuthGuardGuard],
    children: [
      {path:'inventory',data:{animation:'zoomIn'}, loadChildren:()=>import('./inventory/inventory.module').then(mod=>mod.InventoryModule)},
      {path:'billing',data:{animation:'zoomIn'}, loadChildren:()=>import('./billing/billing.module').then(mod=>mod.BillingModule)},
    ]
  },
 // Handle other paths or 404
 {path:'**', component: WildcardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }