import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  username:string;
  password:number;
  // validation:string;
  
  users:user[];
  u:any={};
  url:string='http://localhost:3000/users';

  userFunc(username,password):boolean{
    var status=false;
    for(let u of this.users){

      if(u.username==this.username && u.password == this.password){
        status=true;
        break;
      }

    }
    return status;
}



  constructor(private http:HttpClient,private _router:Router) { 
    this.http.get<user[]>(this.url).subscribe(y => this.users=y);
  }

  Submit(){
    if(this.userFunc(this.username,this.password)){
        alert("Login Credentials are wright");
        this._router.navigate(['./about']);
    }
        else
        alert("Login Credentials are wrong, Pls Check once....");
  
}
  

  ngOnInit() {
    // alert("Login Credentials are wright,then it opens");
  }

}

class user{
  username:string;
  password:number;
}