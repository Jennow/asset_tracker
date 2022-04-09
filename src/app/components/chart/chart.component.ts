import { Component, Input, OnInit } from '@angular/core';

// Achtung -> Wenn hier nichts customisiert werden kann -> Komponente unnötig
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
  ApexTheme
} from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  @Input() chart: ApexChart;
  @Input() annotations: ApexAnnotations;
  @Input() colors: string[];
  @Input() dataLabels: ApexDataLabels;
  @Input() series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  @Input() stroke: ApexStroke;
  @Input() labels: string[];
  @Input() legend: ApexLegend;
  @Input() fill: ApexFill;
  @Input() tooltip: ApexTooltip;
  @Input() plotOptions: ApexPlotOptions;
  @Input() responsive: ApexResponsive[];
  @Input() xaxis: ApexXAxis;
  @Input() yaxis: ApexYAxis | ApexYAxis[];
  @Input() grid: ApexGrid;
  @Input() states: ApexStates;
  @Input() title: ApexTitleSubtitle;
  @Input() subtitle: ApexTitleSubtitle;
  @Input() theme: ApexTheme;


  ngOnInit(): void {}

}
