import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})
export class Event2Component implements OnInit {

name:string='';
msg:string='';
display(){
  this.msg=`Hello ${this.name} `;
}

greeting(){
  var d=new Date();
  var hour=d.getHours();
  if(hour>=6 && hour<=12){
    this.msg=`Good Morning ${this.name}`;
  }else if(hour>=12 && hour<=16){
    this.msg=`Good Afternoon ${this.name}`;
  }else{
    this.msg=`Good Evening ${this.name}`;
  }
  
}

upper(){
  this.msg= this.name.toLocaleUpperCase();
}

lower(){
  this.msg= this.name.toLocaleLowerCase();
}

firstname(){
  this.msg="Hello "+this.name.substring(0,this.name.indexOf(" "));
}

middlename(){
  this.msg="Hello"+this.name.substring(this.name.indexOf(" "),this.name.lastIndexOf(" "));
}

lastname(){
  this.msg="Hello "+this.name.substring(this.name.lastIndexOf(" "));
}

  constructor() { }

  ngOnInit() {
  }

}
