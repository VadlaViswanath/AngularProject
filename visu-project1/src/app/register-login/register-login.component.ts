import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  constructor(private http3:HttpClient,private _router2:Router) { 
    this.http3.get<user1[]>(this.url).subscribe(y=>this.users3=y);
  }

  uname:string;
  pwd:number;
  users3:user1[];
  //=======
    user:any={};
    // u:any={};
    url:string='http://localhost:3000/users3';


  submit(){
    this.http3.post(this.url,this.user,{headers:new HttpHeaders({"content-type":"application/json"})}).subscribe(()=>alert("row added successfully"));
    console.log(this.user);
  }

  userFunc(uname,pwd):boolean{
    var status=false;
    for(let u of this.users3){
      if(u.username ==this.uname && u.password == this.pwd){
          status=true;
          break;
      }
    }
    return status;
  }

  login(){
    if(this.userFunc(this.uname,this.pwd)){
      alert("login details correct");
      this._router2.navigate(['./dashboard']);
    }
     else
     alert("login details wrong"); 
    
  }



  ngOnInit() {
  }

}

 class user1{
  username:string;
  password:number;
}