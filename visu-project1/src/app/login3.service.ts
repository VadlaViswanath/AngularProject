import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Login3Service {

  user:any={};
  
  url:string="http://localhost:3000/users2";

  constructor(private http:HttpClient) { 
     }

     getdata(){
      return this.http.get(this.url);
 
     }

  submit2(){
   return this.http.post(this.url,this.user,{headers:new HttpHeaders({"Content-type":"application/json"})});
  }
}
