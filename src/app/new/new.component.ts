import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Element } from  '../element';



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  


  url='http://localhost/chart/read.php';

  data:Element[];
  lineChart=[];
  id=[];
  number=[];
  month=[];  
 result:Element[]

  constructor(private http:HttpClient) { }

  ngOnInit()
  {
    this.http.get(this.url).subscribe((result:Element[]) => {  
      result.forEach(x => {  
       // this.month.push(x.month);  
       // this.number.push(x.number);
        this.result = result;
        console.log(this.result);
      }); 
  
     })

  }


  LineChartData: ChartDataSets[] = [
    { data: [this.number],label: 'prices'},
    { data: [15, 20, 10, 34, 23, 40], label: 'books' },
  ];

  LineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  LineChartOptions = {
    responsive: true,
  };

  LineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  LineChartLegend = true;
  LineChartPlugins = [];
  LineChartType = 'line';

}
