import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'node_modules/canvasjs/dist/canvasjs.min';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onload = function () {

      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
          text: "Email Categories",
          horizontalAlign: "left"
        },
        data: [{
          type: "doughnut",
          startAngle: 60,
          //innerRadius: 60,
          indexLabelFontSize: 17,
          indexLabel: "{label} - #percent%",
          toolTipContent: "<b>{label}:</b> {y} (#percent%)",
          dataPoints: [
            { y: 67, label: "Inbox" },
            { y: 28, label: "Archives" },
            { y: 10, label: "Labels" },
            { y: 7, label: "Drafts"},
            { y: 15, label: "Trash"},
            { y: 6, label: "Spam"}
          ]
        }]
      });
      chart.render();
      
      }
  }

}
