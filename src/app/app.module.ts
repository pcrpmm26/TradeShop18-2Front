import { HostBinding, HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';


import { NewProductComponent } from './components/pages/new-product/new-product.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './components/pages/product/product.component';

import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AccountUserComponent } from './components/pages/account-user/account-user.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { ExchangeComponent } from './components/pages/exchange/exchange.component';
import { EditAccountUserComponent } from './components/pages/edit-account-user/edit-account-user.component';



@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    AccountUserComponent,
    NavigationComponent,
    MenuComponent,
    EditProductComponent,
    ExchangeComponent,
    EditAccountUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
