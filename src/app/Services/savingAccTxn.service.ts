import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SavingAccTxn } from '../Models/savingAccTxn';
import { TransferAmount } from '../Models/TransferAmount';

@Injectable({
  providedIn: 'root'
})
export class SavingAccTxnService {
  // transfer(transferAmount: any) {
  //   throw new Error('Method not implemented.');
  // }

  url='https://localhost:44350/api/SavingAccTxns';
  constructor(private httpclient:HttpClient) { }

  getAllSavingAccTxns():Observable<SavingAccTxn[]>{
    return this.httpclient.get<SavingAccTxn[]>(this.url);
  }

  // createSavingAccTxn(savingAccTxn: SavingAccTxn): Observable<SavingAccTxn> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.httpclient.post<SavingAccTxn>(this.url + '/PostSavingAccTxn/', savingAccTxn, httpOptions);
  // }

  getSavingAccTxnByAccountId(account:number):Observable<SavingAccTxn[]>{
    return this.httpclient.get<SavingAccTxn[]>(this.url +"/GetSavingAccTxnsByAccountId/" + account);
  }

  deposit(savingAccTxn:SavingAccTxn):Observable<SavingAccTxn>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpclient.post<SavingAccTxn>(this.url + '/Deposit/', savingAccTxn, httpOptions);
  }

  withdraw(savingAccTxn:SavingAccTxn):Observable<SavingAccTxn>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpclient.post<SavingAccTxn>(this.url + '/Withdraw/', savingAccTxn, httpOptions);
  }

  transfer(transferAmount:TransferAmount):Observable<TransferAmount>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpclient.post<TransferAmount>(this.url + '/Transfer/', transferAmount, httpOptions);
  }
}