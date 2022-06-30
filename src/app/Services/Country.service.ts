import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Country } from '../Models/Country';



@Injectable({

  providedIn: 'root'

})

export class CountryService {



  url='https://localhost:44350/api/Country';

  constructor(private httpclient:HttpClient) { }



  getAllCountries():Observable<Country[]>{

  console.log(this.httpclient.get<Country[]>(this.url));

    return this.httpclient.get<Country[]>(this.url);



  }

}