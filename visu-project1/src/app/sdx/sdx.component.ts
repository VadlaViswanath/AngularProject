import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdx',
  templateUrl: './sdx.component.html',
  styleUrls: ['./sdx.component.css']
})


export class SdxComponent implements OnInit {

  
officehours(){
  var d=new Date();
  var hour=d.getHours();
    if(hour>=9 && hour<=16)
        return true;
      else 
        return false;
  
}

//==========================
cars=['BMW','FORD','BENZ','SKODA','KIA'];
electronics=['TV','MOBILE','LAPTOP','DVD'];
items:string[];
item:string[];

Cars(){
  this.items=this.cars;
}

Electronics(){
  this.item=this.electronics;
}




  constructor() { }

  ngOnInit() {
  }

}
