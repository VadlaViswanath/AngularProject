import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  biscuits=["Goodday","Oreo","MarieGold"];

  students=[
    {id:1,name:"visu",designation:"developer",mobile:12345678,gender:"male"},
    {id:2,name:"suma",designation:"teacher",mobile:198765678,gender:"female"},
    {id:3,name:"guna",designation:"student",mobile:345612378,gender:"male"},
    {id:4,name:"sony",designation:"styudent",mobile:1234195378,gender:"female"}
  ];

  wishes(){
    var d=new Date();
    var hour=d.getHours();

    if(hour<12)
      return "Good MOrning";
      else if(hour>12 && hour<16)
      return "Good AfterNoon";
      else
      return "Good evening";
  }
}
