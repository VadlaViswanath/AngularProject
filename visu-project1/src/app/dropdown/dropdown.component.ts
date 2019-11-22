import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(private router:Router) {   }

  // india:boolean;
  // usa:boolean;
   // selecte:boolean;
// item=this.countries[1];

  // changeitem() {
  //   this.selecte=this.selected;
  // }

  //==============================================

  country:string;
  countries=["India","USA","Japan","Canada"];
  
  navigate(){
    this.router.navigate(['../dashboard']);
  }

  navigate2(){
    this.router.navigate(['../animation']);
  }

  //============================

  // items: any[] = [
  //   { id: 0, name: 'one' },
  //   { id: 1, name: 'two' },
  //   { id: 2, name: 'three' },
  //   { id: 3, name: 'four' },
  //   { id: 4, name: 'five' },
  //   { id: 5, name: 'six}' }
  // ];
  // selected: number = 0;

  // constructor() {
  // }
  
  
  
  // selectOption(id: number) {
  //   getted from event
  //   console.log(id);
  //   getted from binding
  //   console.log(this.number)
  // }




  // onSelecetionChange(value:string){
  //   if(value === 'india'){
  //     this.india = true;
  //   }
  //   if(value === 'usa'){
  //     this.usa = true;
  //   }

  //   }

    
//   regTypeSelectedOption: string = "";
// selectedNav: any; 
// navs = ['option 1', 'option 2', 'option 3'];

// ngOnInit() {
//     this.selectedNav = 'select value';
// }
// setNav(nav:any){
//         this.selectedNav = nav;
//             if(this.selectedNav == "option 1"){
//                 this.regTypeSelectedOption = "option 1";
//             }
//             else if(this.selectedNav == "option 2"){
//                 this.regTypeSelectedOption = "option 2";
//             }
//             else if(this.selectedNav == "option 3"){
//                 this.regTypeSelectedOption = "option 3";
//             }
//         }

  ngOnInit(){
    
  }

}
