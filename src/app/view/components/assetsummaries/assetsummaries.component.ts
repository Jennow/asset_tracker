import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CHARTS } from 'src/app/mock-charts';
import { UserAsset } from 'src/app/model/UserAsset';
import { Chart } from 'src/app/model/Chart';
import { CoinCapHistoryItem } from 'src/app/model/CoinCapHistoryItem';
import { CryptohistoryService } from 'src/app/services/histories/cryptohistory.service';

@Component({
  selector: 'app-assetsummaries',
  templateUrl: './assetsummaries.component.html',
  styleUrls: ['./assetsummaries.component.css']
})
export class AssetsummariesComponent implements OnInit {
  charts: Chart[] = [CHARTS[0]];
  @Input() assets: UserAsset[];
  @Input() histories: CoinCapHistoryItem[] | any[];

  constructor(private cryprohistoryService: CryptohistoryService) { }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    this.cryprohistoryService.getHistories(this.assets).subscribe((historyDataArray:Array<any>) => {
      this.charts.push(this.cryprohistoryService.generateGraphFromHistories(historyDataArray, this.assets));
      console.log(this.charts);
    });
  }
}
