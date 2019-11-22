import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../customers.service';

@Component({ 
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[CustomersService]
})
export class CustomersComponent implements OnInit {

  customers:customer[];

  constructor(private _cstr:CustomersService) {  }

  getCustomers(){
    this.customers=this._cstr.getCustomersFromApi();
  }

  ngOnInit() {
  }

}

class customer{
  id:number;
  Ename:string;
  email:string;
  designation:string;
}