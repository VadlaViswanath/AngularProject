import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event4',
  templateUrl: './event4.component.html',
  styleUrls: ['./event4.component.css']
})
export class Event4Component implements OnInit {

n1:number;
n2:number;
n3:number;
tot:number;
avge:number;

resu:string="";

total(){
  this.tot=this.n1+this.n2+this.n3;
}

average(){
  this.avge=this.tot/3;
}


result(){
  if(this.n1 >= 35 && this.n2 >=35 && this.n3 >= 35){
    this.resu="Pass";
  }
    else {
      this.resu="Fail";
    
    }
}





  constructor() { }

  ngOnInit() {
  }

}
