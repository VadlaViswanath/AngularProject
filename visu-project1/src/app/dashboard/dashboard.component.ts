import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  message:string;
  username:string;

  constructor(private _router:Router) { 
    if(localStorage.getItem('username1')!=''){
      this.username=localStorage.getItem('username1');
      this.message=`Hii ${this.username}, Welcome to Dashboard`;
     
    }
    else{
    alert(`Landed on this page using techniques`);
    this._router.navigate(['../login']);
    }
  }

  ngOnInit() {
  }

}
