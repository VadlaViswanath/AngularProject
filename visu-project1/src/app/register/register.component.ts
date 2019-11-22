import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { 
    this.employees.push(new Employee(201,'suma','vadla','suma@gmail.com',15000,'female','india'));
    this.employees.push(new Employee(202,'guna','vadla','guna@gmail.com',1000,'male','USA'))
    this.employees.push(new Employee(203,'sony','vadla','sony@gmail.com',500,'female','JAPAN'))

    this.msg=`Employees Count is ${this.employees.length}`;
  }

  ngOnInit() {
  }



msg:string;

employees=new Array();

x:Employee=new Employee();

addRow(){
  if(this.x.id==null){
    this.msg=`Employees Count is ${this.employees.length}`;
  }
  // else if(this.x.firstname==''){
  //   this.msg=`Employees Count is ${this.employees.length}`;
  // }
  // else if(this.x.lastname==''){
  //   this.msg=`Employees Count is ${this.employees.length}`;
  // }
  // else if(this.x.email==''){
  //   this.msg=`Employees Count is ${this.employees.length}`;
  // }
  // else if(this.x.amount==null){
  //   this.msg=`Employees Count is ${this.employees.length}`;
  // }
  // else if(this.x.gender==''){
  //   this.msg=`Employees Count is ${this.employees.length}`;
  // }
  // else if(this.x.country==''){
  //   this.msg=`Employees Count is ${this.employees.length}`;
  // }
  else{
    this.employees.push(this.x);
    this.msg=`Employees Count is ${this.employees.length}`;
  }
}

selectRow(i){
  this.x=JSON.parse(JSON.stringify(this.employees[i]));
  this.msg=`Employees Count is ${this.employees.length}`;
}

deleteRow(i){
  this.employees.splice(i,1);
  this.msg=`Employees Count is ${this.employees.length}`;
}

updateRow(){
  for(var i=0;i<this.employees.length;i++){
    if(this.employees[i].id==this.x.id)
    this.employees[i]=this.x;
  }
}
// onRegisterClick(f){
//   if(f.valid){
//     this.msg="Firstname: "+ this.firstname + "<br>Lastname: " + this.lastname +"<br>Email: "+ this.email +"<br>Amount: " +this.amount + "<br>Gender: " + this.gender +"<br>Country"+this.country;
//   }
//   else{
//     this.msg="Invalid";
//   }
// }







}

class Employee {
    id:number;
    firstname:string;
    lastname:string;
    email:string;
    amount:number;
    gender:string;
    country:string;

    constructor(id?:number,firstname?:string,lastname?:string,email?:string,amount?:number,gender?:string,country?:string){
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.amount=amount;
        this.gender=gender;
        this.country=country;

    }
}