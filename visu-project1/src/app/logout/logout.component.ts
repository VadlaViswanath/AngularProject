import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  message:string;
  uname:string;

  constructor() { 
    if(localStorage.getItem('uname')!=''){
      this.uname=localStorage.getItem('uname');
      this.message=`${this.uname}, Logged out Successfully `;
      localStorage.setItem('uname','');
    }
    else
    this.message=`Landed out of the techniques`;
  }

  ngOnInit() {
  }

}
