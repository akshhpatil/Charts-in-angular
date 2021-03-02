import { Component, OnInit } from '@angular/core';
import { Element } from  '../element';
import { Chart } from 'node_modules/chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url='http://localhost/chart/read.php';
  data: Element[];
  lineChart=[];
  id=[];
  number=[];
  month=[];
  num=[];
 constructor( private http: HttpClient ){}
 
 ngOnInit()
   {
     this.http.get(this.url).subscribe((result:Element[]) => {  
       result.forEach(x => {  
         this.id.push(x.id);  
         this.number.push(x.number);
         this.month.push(x.month); 
         this.num.push(x.num); 
 
       });  
       this  
       this.lineChart = new Chart('canvas', {  
         type: 'line',  
         data: {  
           labels: this.month,  
           datasets: [  
             {  
               data: this.number,  
               borderColor: 'red',  
              // backgroundColor: "#0000FF",  
             },
             {  
               data: this.num,  
               borderColor: 'yellow',  
              // backgroundColor: "black",  
             }  
           ]  
         },  
         options: {  
           legend: {  
             display: false  
           },  
           scales: {  
             xAxes: [{  
               display: true  
             }],  
             yAxes: [{  
               display: true  
             }],  
           }  
         }  
       });  
     });  
 }
}
