import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SavingAccount } from '../Models/SavingAccount';
import { SavingAccTxn } from '../Models/savingAccTxn';
import { TransferAmount } from '../Models/TransferAmount';
import { CustAccountService } from '../Services/custAccount.service';
import { SavingAccountService } from '../Services/savingAccount.service';
import { SavingAccTxnService } from '../Services/savingAccTxn.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saving-acc-opeartions',
  templateUrl: './saving-acc-opeartions.component.html',
  styleUrls: ['./saving-acc-opeartions.component.css']
})
export class SavingAccOpeartionsComponent implements OnInit {
  accountNumber: number = this.route.snapshot.params['id'];

  withdrawForm: any;
  depositForm: any;
  transferForm: any;

  savingAccount!: SavingAccount;

  customerId!: number;

  txns: SavingAccTxn[] = [];

  constructor(private router: Router, private custAccountService: CustAccountService, private savingAccountService: SavingAccountService, private route: ActivatedRoute, private formbuilder: FormBuilder, private savingAccTxnService: SavingAccTxnService) {
    this.custAccountService.getCustomerIdByCustAccountId(this.accountNumber)
      .subscribe({
        next: custAccount => {
          this.customerId = custAccount.CustomerId
        },
        error: err => {
          this.showErrorAlert('Invalid account number')
          console.log(err);
        }
      })
  }

  ngOnInit(): void {

    this.savingAccTxnService.getSavingAccTxnByAccountId(this.accountNumber)
      .subscribe({
        next: txns => {
          this.txns = txns;
        },
        error: err => {
          console.log('component:SavingAccOperation,method:Constructor,service:SavingAccTxn');
          console.log(err);
        }
      });
    this.savingAccountService.getSavingAccountByCustAccountId(this.accountNumber)
      .subscribe({
        next: sa => {
          this.savingAccount = sa;
        },
        error: err => {
          console.log('component:savingAccOperation,method:Constructor,service:savingAccountservice');
          this.showErrorAlert('Invalid account')
          this.router.navigateByUrl('/')
          console.log(err);
        }
      })

    this.withdrawForm = this.formbuilder.group({
      Amount: ['', [Validators.required]],
      Remarks: ['', [Validators.required]],
    });
    this.depositForm = this.formbuilder.group({
      Amount: ['', [Validators.required]],
      Remarks: ['', [Validators.required]],
    });
    this.transferForm = this.formbuilder.group({
      AccountNumber: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      Remarks: ['', [Validators.required]],
    });
  }

  withdraw() {
    console.log(this.withdrawForm.value);
    let savingAccTxn = new SavingAccTxn(this.savingAccount.SavingAccountId, this.withdrawForm.value.Remarks, this.withdrawForm.value.Amount);
    console.log(savingAccTxn);
    this.savingAccTxnService.withdraw(savingAccTxn)
      .subscribe({
        next: txn => {
          this.showSuccessAlert(txn.Amount + ' withdrawn ')
          console.log(txn);
          this.ngOnInit();
        },
        error: err => {
          console.log(err);
          // alert(err.error.Message)
          this.showErrorAlert(err.error.Message)
        }
      })
  }

  deposit() {
    console.log(this.depositForm.value);
    let savingAccTxn = new SavingAccTxn(this.savingAccount.SavingAccountId, this.depositForm.value.Remarks, this.depositForm.value.Amount);
    console.log(savingAccTxn);
    this.savingAccTxnService.deposit(savingAccTxn)
      .subscribe({
        next: txn => {
          this.showSuccessAlert(txn.Amount + ' deposited ')
          
          console.log(txn);
          this.ngOnInit();
        },
        error: err => {
          console.log(err);
          // alert(err.error.Message)
          this.showErrorAlert(err.error.Message)
        }
      });
  }

  transfer() {
    console.log(this.transferForm.value)
    let transferAmount = new TransferAmount(this.savingAccount.SavingAccountId, this.transferForm.value.AccountNumber, this.transferForm.value.Remarks, this.transferForm.value.Amount);
    console.log(transferAmount);
    this.savingAccTxnService.transfer(transferAmount)
      .subscribe({
        next: () => {
          console.log('success');
          // alert('Amount Successfully transferred')
          this.showSuccessAlert(' transferred ')
          
          this.ngOnInit();
        },
        error: (err: { error: { Message: string; }; }) => {
          console.log(err);
          // alert(err.error.Message)
          this.showErrorAlert(err.error.Message)
        }
      });
  }
  showSuccessAlert(msg:string) {

    Swal.fire({
  
      position: 'center',
  
      icon: 'success',
  
      title: 'Success ',

      text:'Amount ₹'+ msg +' successfully',
  
      showConfirmButton: true  ,
      confirmButtonColor: "#87CEEB"  
    })
  }

  showErrorAlert(msg:string) {

    Swal.fire({
  
      position: 'center',
  
      icon: 'error',
  
      title: 'OOPS! ',

      text: msg ,
  
      showConfirmButton: true  ,
      confirmButtonColor: "crimson"  
    })
  }
}
