import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {

  // username:string='';
  // password:string='';
  user:any={};
  users:any=[];
  url:string="http://localhost:3000/users2";

  constructor(private http2:HttpClient) { 
    this.http2.get(this.url).subscribe(data=>this.users=data);
  }

  submit(){
    this.http2.post(this.url,this.user,{headers:new HttpHeaders({"Content-type":"application/json"})}).subscribe(()=>alert("Row added successfully"));
  }

  search(id:number){
    
      this.http2.get(`${this.url}/${id}`).subscribe(data=>this.user=data);
  }

  ngOnInit() {
  }

}

// class users2{
//   username:string;
//   password:string;
// }