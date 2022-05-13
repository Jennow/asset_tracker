import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CHARTS } from 'src/app/mock-charts';
import { UserAsset } from 'src/app/model/UserAsset';
import { Chart } from 'src/app/model/Chart';
import { CoinCapHistoryItem } from 'src/app/model/CoinCapHistoryItem';
import { CryptohistoryService } from 'src/app/services/histories/cryptohistory.service';
import { ChartService } from 'src/app/services/chart.service';
import { HistoryFormattingService } from 'src/app/services/histories/historyformatting.service';
import { HistoryItem } from 'src/app/model/HistoryItem';

@Component({
  selector: 'app-assetsummaries',
  templateUrl: './assetsummaries.component.html',
  styleUrls: ['./assetsummaries.component.css']
})
export class AssetsummariesComponent implements OnInit {
  charts: Chart[] = [CHARTS[0]];
  @Input() assets: UserAsset[];
  @Input() histories: CoinCapHistoryItem[] | any[];

  constructor(private cryprohistoryService: CryptohistoryService, private chartService: ChartService) { }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    this.histories.forEach(history => {
      const chartData = HistoryFormattingService.formatHistoryForLinearChart(history.data);
      this.charts.push(this.chartService.getLinearChart(chartData));      
    });
  }
}
