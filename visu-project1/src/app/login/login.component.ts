import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

users=[
        {uname:"visu",pwd:"4321"},
        {uname:"suma",pwd:"2341"},
        {uname:"guna",pwd:"2143"},
        {uname:"sony",pwd:"1243"}
];

uname:string;
pwd:number;
validation:string="";

constructor(private _router:Router) { }

    userFunc(uname,pwd):boolean{
        var status=false;
        for(let user of this.users){

          if(user.uname==uname && user.pwd == pwd){
            status=true;
            break;
          }

        }
        return status;
    }



    valid(){
      if(this.userFunc(this.uname,this.pwd)){
          localStorage.setItem('username1',this.uname);
         // alert(`Login Credentisls are wright`);
         this._router.navigate(['../dashboard']);
     
       }
        else
        alert(`Login Credentisls are wrong`);
    }
    

//================================================
    

// valid(){
//   if(this.uname=='visu' && this.pwd==4321){
//   this._router.navigate(['../dashboard']);
//   }
//     else
//     alert(`Login Credentisls are wrong`);
// }

//======================================================
clear(){
  this.uname=" ";
  this.pwd=null;
  this.validation=null;
}


//======================


// people=[
//     {ename:'visu',id:1,gender:'Male',age:25},
//     {ename:'suma',id:2,gender:'Female',age:22},
//     {ename:'guna',id:3,gender:'Male',age:15},
//     {ename:'sony',id:4,gender:'Female',age:17}
// ];

// x:{};

// getrow(s){
//   this.x=this.people[s];
// }

// clear2(){
//   this.x=" ";
// }

// ename:string;
// id:number;
// gender:string;
// age:number;




  ngOnInit() {
  }

}
