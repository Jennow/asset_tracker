import { Component, OnInit } from '@angular/core';
import { CHARTS } from 'src/app/mock-charts';
import { Chart } from 'src/app/model/Chart';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  chart: Chart
  constructor() { }

  ngOnInit(): void {
    this.chart = CHARTS[2];
  }

}
