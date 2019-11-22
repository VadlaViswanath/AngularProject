import { Component, OnInit } from '@angular/core';
import {HelloService} from '../hello.service'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers:[HelloService]
})
export class HelloComponent implements OnInit {

  msg:string=" ";
  message:string[];
 student:any=[];

  constructor(private _hs:HelloService) {
    this.msg= this._hs.wishes();

    // ,private biscuit:HelloService,private _st:HelloService


    this.message=this._hs.biscuits;

    this.student=this._hs.students;
   }

  ngOnInit() {
  }


  




}



