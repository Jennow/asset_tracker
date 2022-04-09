import { Component, Input, OnInit } from '@angular/core';
import { 
  ApexNonAxisChartSeries, 
  ApexAxisChartSeries,
  ApexTitleSubtitle, 
  ApexChart,
  ApexGrid,
  ApexDataLabels,
  ApexLegend,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexXAxis,
  ApexAnnotations,
  ApexTooltip,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexTheme,
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
  @Input() height: number = 300;
  @Input() numbers: Array<number> = [1,2,3,4,5,6,7,8,9];
  @Input() color: string = '#4fd1c5';
  
  series: ApexNonAxisChartSeries; 
  apexChart: ApexChart;
  legend: ApexLegend = {
    position: 'bottom'
  }
  responsive: ApexResponsive[] = [{
    breakpoint: 480,
    options: {
      chart: {
        width: '100%',
      },
      legend: {
        position: 'right'
      }
    }
  }]
  labels: string[];

  constructor() { }

  ngOnInit(): void {
    this.apexChart = 
    {
      // height: this.height,
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
