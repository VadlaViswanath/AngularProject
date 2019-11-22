import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

employees =new Array();
msg:string;

 x:Employee =new Employee() ; //it automatically display the table data
//x:{}; when click it display the table data

  constructor() { 

    this.employees.push(new Employee(201,"visu","unemployee",1000) );
    this.employees.push(new Employee(202,"suma","teacher",1200) );
    this.employees.push(new Employee(203,"guna","student",700) );
    this.employees.push(new Employee(204,"sony","student",800) );  

    this.msg=`Employees Count ${this.employees.length}`;




    

  }

  date= new Date();
   
  
  //   msge:string=" ";

  // status(){
  //   var d=new Date();
  //   var day=d.getDay();
    
  
  //   if(day == 0){
  //     this.msge="today is sunday";
  //   }
  //     else if(day==6){
  //     this.msge=`today is saturday`;
  //     }
  //     else{
  //     this.msge=`today we have office`;
  //     }
  //}








  selectRow(i){
       //this.x=this.employees[i]; immediate update 
         this.x= JSON.parse(JSON.stringify(this.employees[i]));
         
      //  for cloning
  }

  deleteRow(i){
    this.employees.splice(i,1);
    this.msg=`Employees Count ${this.employees.length}`;

  }

  addRow(){
    if(this.x.id==null){
    this.msg=`Employees Count ${this.employees.length}`;
    }
    else{
      this.employees.push(this.x);
      this.msg=`Employees Count ${this.employees.length}`;
      console.log(this.employees);
    }
  }

  updateRow(){
    for(var i=0;i<this.employees.length;i++){
      if(this.employees[i].id==this.x.id)
        this.employees[i]=this.x;
      
    }
  }

  ngOnInit() {
  }

}

class Employee{
  id:number;
  ename:string;
  job:string;
  salary:number;
  

  constructor(id?:number,ename?:string,job?:string,salary?:number){
    this.id=id;
    this.ename=ename;
    this.job=job;
    this.salary=salary;
    
  }
}

