import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'src/app/model/Chart';
import { UserService } from 'src/app/services/collections/user.service';
import { 
  ApexAxisChartSeries,
  ApexChart,
  ChartType,
  ApexGrid,
  ApexDataLabels,
  ApexLegend,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexXAxis,
} from 'ng-apexcharts';


@Component({
  selector: 'app-linearchart',
  templateUrl: './linearchart.component.html',
  styleUrls: ['./linearchart.component.css']
})
export class LinearchartComponent implements OnInit {
  @Input() chart: Chart;
  @Input() height: number = 200;
  @Input() color: string = '#4fd1c5';

  apexChart: ApexChart;
  apexGrid: ApexGrid = {
    show: false,
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0    
    }
  }
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  stroke: ApexStroke;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis = {
    type: 'datetime',
  };

  series: ApexAxisChartSeries; 

  public user;

  constructor(private userService: UserService) { 
    this.user = this.userService.getUser();
  }
  
  ngOnInit(): void {
    this.apexChart = 
      {
        height: this.height,
        width: '100%',
        type: this.chart.type as ChartType,
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false,
         },
      }
    this.series = [
      {
        name: "serie1",
        data: this.chart.data
      }
    ]
    this.fill = {
      colors: [this.color],
    }
    this.stroke = {
      colors: [this.color],
      width: 3
    }
    if (this.chart.xaxis) {
      console.log(this.chart)
      this.xaxis = this.chart.xaxis;
    }
  }
}
