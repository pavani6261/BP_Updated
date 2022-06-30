import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { CustomerInfoFormComponent } from './customer-info-form/customer-info-form.component';
import { CustomerAddressFormComponent } from './customer-address-form/customer-address-form.component';
import { LoanAccountFormComponent } from './loan-account-form/loan-account-form.component';
import { SavingAccountFormComponent } from './saving-account-form/saving-account-form.component';
import { LoanAccOperationsComponent } from './loan-acc-operations/loan-acc-operations.component';
import { SavingAccOpeartionsComponent } from './saving-acc-opeartions/saving-acc-opeartions.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    CustomerAddressFormComponent,
    CustomerInfoFormComponent,
    LoanAccountFormComponent,
    SavingAccountFormComponent,
    LoanAccOperationsComponent,
    SavingAccOpeartionsComponent,
    AccountDetailsComponent,
    AddAccountComponent,
    CustomerProfileComponent,
    UpdateaccountComponent,
    UpdatecustomerComponent,
    LoginComponent
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
