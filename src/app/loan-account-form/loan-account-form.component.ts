import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { AccountType } from '../Models/AccountType';
import { CalculateLoan } from '../Models/CalculateLoan';
import { LoanAccountService } from '../Services/loanAccount.service';

@Component({
  selector: 'app-loan-account-form',
  templateUrl: './loan-account-form.component.html',
  styleUrls: ['./loan-account-form.component.css']
})
export class LoanAccountFormComponent implements OnInit {

  @Input() filteredAccountTypes !: AccountType[];

  @Input() formGroupName!: string

  loanAccountForm!: FormGroup
  constructor(private rootFormGroup: FormGroupDirective, private loanAccountService: LoanAccountService) { }

  ngOnInit(): void {
    this.loanAccountForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup
  }

  totalamt!: any;
  emi!: any;

  calculateLoanmethod() {
     //this.loanAccountService.calculateLoan()
    let InterestRate;
    let duration = this.loanAccountForm.get('LoanDuration')?.value;
    let loanAmount = this.loanAccountForm.get('LoanAmount')?.value;
    this.filteredAccountTypes.forEach(x => {
      if (x.AccountTypeId == this.loanAccountForm.get('AccountTypeId')?.value) {
        InterestRate = x.InterestRate;
        this.loanAccountService.calculateLoan(new CalculateLoan(InterestRate, duration, loanAmount))
          .subscribe(l => {
            console.log(l);
            this.emi = l.EMI;
            this.totalamt = l.BalanceAmount;
            this.loanAccountForm.controls['BalanceAmount'].setValue(l.BalanceAmount);
          })
      }
    })
  }

  setAccountSubType(value: any) {
    this.filteredAccountTypes.forEach(x => {
      if (x.AccountTypeId == value.target.value) {
        this.loanAccountForm.controls['RateOfInterest'].setValue(x.InterestRate);
      }
    })
    this.loanAccountForm.controls['BalanceAmount'].setValue('');
    this.loanAccountForm.controls['LoanDuration'].setValue('');
    this.loanAccountForm.controls['BranchCode'].setValue('');
    
    this.emi = '';
    this.totalamt = '';
    
  }

  resetFields() {
    this.loanAccountForm.controls['BalanceAmount'].setValue('');
    this.emi = '';
    this.totalamt = '';
  }


}
