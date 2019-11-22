import { Component, OnInit } from '@angular/core';
import {trigger,style,state,animate,transition} from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("visuanimate",[
      state("small",style({transform:"rotate(90deg)",height:'200px',width:'200px',margin:'auto',color:'red',backgroundColor:'yellow',fontSize:'20px'})),
      state("bigger",style({transform:"rotate(0deg)",height:'100px'})),
      transition("small => bigger",animate("1000ms")),
      transition("bigger => small",animate("2000ms"))
      
    ])
  ]
})
export class AnimationComponent implements OnInit {


 





  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

    
      $('#btnShow').click(function(){
      $('#bp').css({'font-size':'32px',
                    'font-weight':'bold',
                    'color':'green',
                    'padding':'20px',
                    'backgroundColor':'pink',
                    'height':'200px','width':'500px',
                    'marginLeft':'100px'});
      $('#bp').animate({left:'250px'},3000);              
      });
      
      });

      // ===========

      $(document).ready(function(){

        $('#animate').click(function(){
          $('#jq').addClass('jq');
          $('#jq').animate({left:'250px'},2000);
        });
      });

      // ============================

      $(document).ready(function(){
        $("#animate1").click(function(){
          var span = $("span");  
          span.animate({left: '100px'}, "slow");
          span.animate({fontSize: '3em'}, "slow");
        });
      });


  }
currentstate:string="bigger";

bigData(){
  this.currentstate="bigger";
}

smallData(){
  this.currentstate="small";
}



}
