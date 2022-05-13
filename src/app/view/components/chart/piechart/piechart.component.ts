import { Component, Input, OnInit } from '@angular/core';
import { 
  ApexNonAxisChartSeries, 
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartType
} from 'ng-apexcharts';
import { Chart } from 'src/app/model/Chart';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  @Input() chart: Chart;
  @Input() type: ChartType = 'pie';
  @Input() height: number;
  
  series: ApexNonAxisChartSeries; 
  apexChart: ApexChart;
  legend: ApexLegend = {
    show: true,
    position: 'right'
  }
  responsive: ApexResponsive[] = [{
    breakpoint: 480,
    options: {
      chart: {
        width: '100%',
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  labels: string[];

  constructor() { }

  ngOnInit(): void {
    if (this.chart) {
      this.apexChart = {
        height: this.height ? this.height : 400,
        width: '100%',
        type: this.chart.type as ChartType,
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false,
         },
      }
      this.series = this.chart.data
      this.labels = this.chart.labels as string[]
    }
  }
}
