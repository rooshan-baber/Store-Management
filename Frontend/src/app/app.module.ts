import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import { WildcardComponent } from './wildcard/wildcard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InventoryModule } from './inventory/inventory.module';
import { BillingModule } from './billing/billing.module';
import { AuthtokenInterceptor } from './authtoken.interceptor';
import { UserdataService } from './services/userdata.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    WildcardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    InventoryModule,
    BillingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InventoryModule,
    BillingModule,
  ],
  exports:[],
  providers: [UserdataService,CookieService,{provide: HTTP_INTERCEPTORS, useClass: AuthtokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
