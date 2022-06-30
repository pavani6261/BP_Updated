import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountType } from '../Models/AccountType';

@Injectable({
  providedIn: 'root'
})
export class AccountTypeService {

  url='https://localhost:44350/api/AccountTypes';
  constructor(private httpclient:HttpClient) { }

  getAllAccountTypes():Observable<AccountType[]>{
    return this.httpclient.get<AccountType[]>(this.url);
  }
}