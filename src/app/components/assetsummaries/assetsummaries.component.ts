import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CHARTS } from 'src/app/mock-charts';
import { Asset } from 'src/app/model/Asset';
import { Chart } from 'src/app/model/Chart';
import { CryptohistoryService } from 'src/app/services/histories/cryptohistory.service';

@Component({
  selector: 'app-charts',
  templateUrl: './assetsummaries.component.html',
  styleUrls: ['./assetsummaries.component.css']
})
export class AssetsummariesComponent implements OnInit {
  charts: Chart[] = [CHARTS[0]];
  @Input() assets: Asset[];

  constructor(private cryprohistoryService: CryptohistoryService) { }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    this.cryprohistoryService.getHistories(this.assets).subscribe((historyDataArray:Array<any>) => {
      this.charts.push(this.cryprohistoryService.generateGraphFromHistories(historyDataArray, this.assets));
    });
  }
}
