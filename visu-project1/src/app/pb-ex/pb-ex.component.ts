import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb-ex',
  templateUrl: './pb-ex.component.html',
  styleUrls: ['./pb-ex.component.css']
})
export class PbExComponent implements OnInit {

img3='../assets/2-1.jpg';

img1='';

link:string='https://www.facebook.com';
showImage(img2){
  this.img1='../assets/' +img2+'.jpg';
}


//==========================

officeHours:boolean=true;

   constructor() {
    var d=new Date();
    var hour=d.getHours();
    if(hour>=10 && hour<23){
      this.officeHours=false;
    }


   }

  ngOnInit() {
  }

  getColor(a){
    return a;
  }
// ===============
newColor:string='';
b:any;
changeColor(){
 this.b=this.newColor;
}
// =======================
changeProp:string="";

changeFunc={"color":"green"};

change(){
  this.changeProp="changeFunc";
}




}
