import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})
export class Event1Component implements OnInit {

  msg:string=' ';

  Display(){
    this.msg="viswanath";
  }

  clear(){
    this.msg=' ';
  }
//=======================
  msg2:string='';

  GetDate(){
    this.msg2=new Date().toDateString();
  }

  GetTime(){
    this.msg2=new Date().toLocaleTimeString();
  }

  //============================

  name:string='';
  msg3:string='';

  display2(){
    this.msg3='Hello '+this.name+'. How are you?';
  }



  constructor() { }

  ngOnInit() {
  }

}
