import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event3',
  templateUrl: './event3.component.html',
  styleUrls: ['./event3.component.css']
})
export class Event3Component implements OnInit {

  n:number;
  msg:string='';

  calculatesquare(){
    this.msg=`Square of entered number is ${this.n * this.n}`;
  }

//==================================

  n1:number;
  n2:number;
  msg2:string='';

  

  add(){
    this.msg2=`Adding of Two numbers ${this.n1 + this.n2}`;
  }

  multiply(){
    this.msg2=`Multiply of Two numbers ${this.n1 * this.n2}`;
  }

  sub(){
    this.msg2=`Subtraction of Two numbers ${this.n1 - this.n2}`;
  }

  div(){
    this.msg2=`Division of Two numbers ${this.n1 / this.n2}`;
   }

  big(){
    if(this.n1 > this.n2){
    this.msg2=`Biggest of Two numbers ${this.n1}`;
    }
    else{
      this.msg2=`Biggest of Two numbers ${this.n2}`;
    }
  }


small(){
    if(this.n1 < this.n2){
    this.msg2=`Smallest of Two numbers ${this.n1}`;
    }
    else{
      this.msg2=`Smallest of Two numbers ${this.n2}`;
    }
  }

  swap(){
    this.n1=this.n1 + this.n2;
    this.n2=this.n1 - this.n2;
    this.n1=this.n1 - this.n2;
  }

clear(){
  this.n1=null;
  this.n2=null;
}


  s:string='';
  s1:string='';
  s2:string='';

swap2(){
  this.s=this.s1;
  this.s1=this.s2;
  this.s2=this.s;
}







  constructor() { }

  ngOnInit() {
  }

}
