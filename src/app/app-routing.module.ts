import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoanAccOperationsComponent } from './loan-acc-operations/loan-acc-operations.component';
import { SavingAccOpeartionsComponent } from './saving-acc-opeartions/saving-acc-opeartions.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'Register',component:RegisterComponent},
  {path:'SavingAccount/:id',component:SavingAccOpeartionsComponent},
  {path:'LoanAccount/:id',component:LoanAccOperationsComponent},
  {path:'AddAccount/:id',component:AddAccountComponent},
  {path:'UpdateAccount/:id',component:UpdateaccountComponent},
  {path:'Profile/:id',component:CustomerProfileComponent},
  {path:'UpdateCustomer/:id',component:UpdatecustomerComponent},
  {path:'Login',component:LoginComponent},
  {path:'**',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
