import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customers:customer[];
  url:string='http://localhost:3000/customers';
  constructor(private _http:HttpClient) {
     
   }
   getCustomersFromApi(){
    this._http.get<customer[]>(this.url).subscribe(data => this.customers=data);

    return this.customers;
   }
}

class customer{
  id:number;
  Ename:string;
  email:string;
  designation:string;
}