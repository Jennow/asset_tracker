import { Component, OnInit } from '@angular/core';
import { CHARTS } from 'src/app/mock-charts';
import { Chart } from 'src/app/model/Chart';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  // TODO Filter charts.. Better -> Asset -> 
  charts: Chart[] = [CHARTS[0], CHARTS[1]];
  constructor() { }

  ngOnInit(): void {
  }

}
