import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'src/app/model/Chart';

@Component({
  selector: 'app-candlestickchart',
  templateUrl: './candlestickchart.component.html',
  styleUrls: ['./candlestickchart.component.css']
})
export class CandlestickchartComponent implements OnInit {
  @Input() chart:Chart;
  constructor() { }

  ngOnInit(): void {
  }

}
