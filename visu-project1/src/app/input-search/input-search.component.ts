import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  
    inputSearch:string="";
    results1:any=[];

    results2:any=[];

    url:string='https://jsonplaceholder.typicode.com/todos';

    constructor(private hService:HttpClient) {
      this.hService.get(this.url).subscribe(data=>this.results1=data);
      this.results2=this.results1;
     }

     search(){
      this.results2=this.results1.filter((emp)=>{
        return emp.title.toLowerCase().indexOf(this.inputSearch.toLowerCase())>=0;
      });
     }



    // search(term:any){
    //   console.log(term);
    //     this.hService.get(`${this.url}/${term}`).toPromise()
    //     .then( (data:any)=> {
    //       console.time('request-length');
    //       console.log(data);
    //       console.timeEnd('request-length');
    //       this.results=data;
    //     });
        
    // }

  ngOnInit() {
  }

}

// class title{
//   title:string;
// }