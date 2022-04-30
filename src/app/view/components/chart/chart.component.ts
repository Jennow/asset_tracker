import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'src/app/model/Chart';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  @Input() chart: Chart;
  @Input() height: number;
  @Input() color: string;

  ngOnInit(): void {}
}
