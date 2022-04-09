import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'src/app/model/Chart';
import { UserService } from 'src/app/services/collections/user.service';
import { 
  ApexNonAxisChartSeries, 
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
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css']
})
export class AreachartComponent implements OnInit {
  @Input() chart: Chart;
  @Input() type: ChartType = 'area';
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
  dataLabels: ApexDataLabels = {
    enabled: false
  }
  legend: ApexLegend = {
    show: false
  }
  fill: ApexFill;
  stroke: ApexStroke = {
    colors: ['#4fd1c5'],
    width: 3
  }
  yaxis: ApexYAxis = {
    show: false
  }
  xaxis: ApexXAxis = {
    labels: {
        show: false,
    },   
    axisBorder: {
      show: false,        
    },   
    tooltip: {
        enabled: false,
    }
  }

  series: ApexAxisChartSeries; 

  public user;

  constructor(private userService: UserService) { 
    this.user = userService.getUser();
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
  }
}
