import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { HttpClient } from '@angular/common/http';
import { Element } from  '../element';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  url='http://localhost/chart/read.php';

 data: Element[];
 barChart=[];
 id=[];
 number=[];

 constructor( private http: HttpClient ){}

 
 ngOnInit()
  {
    this.http.get(this.url).subscribe((result:Element[]) => {  
      result.forEach(x => {  
        this.id.push(x.id);  
        this.number.push(x.number);  
      });  
      this  
      this.barChart = new Chart('can', {  
        type: 'bar',  
        data: {  
          labels: this.id,  
          datasets: [  
            {  
              data: this.number,  
              borderColor: '#FF0000',  
              backgroundColor: "#FF0000",  
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
