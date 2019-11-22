import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ename='';
amount:number;
dob = new Date();

//   Students:student[];
//   url:string="http://localhost:3000/Students";

// constructor(private _http:HttpClient){

//   this._http.get<student[]>(this.url)
//       .subscribe(data => this.Students=data);

// }

//============================================================

  users:user[];
  url:string="https://jsonplaceholder.typicode.com/users";

constructor(private _http:HttpClient){

  this._http.get<user[]>(this.url)
      .subscribe(data => this.users=data);

}
  

  
}

// class student{
//   id:number;
//   name:string;
//   email:string;
//   city:string;
//   designation:string;
// }

//================================


class user{
  id:number;
  name:string;
  username:string;
  email:string;
  website:string;
  phone:string;
}