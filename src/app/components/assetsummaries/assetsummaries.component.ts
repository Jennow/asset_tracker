import { Component, OnInit } from '@angular/core';
import { CHARTS } from 'src/app/mock-charts';
import { Asset } from 'src/app/model/Asset';
import { Chart } from 'src/app/model/Chart';
import { AssetService } from 'src/app/services/collections/asset.service';
import { CryptohistoryService } from 'src/app/services/histories/cryptohistory.service';

@Component({
  selector: 'app-charts',
  templateUrl: './assetsummaries.component.html',
  styleUrls: ['./assetsummaries.component.css']
})
export class AssetsummariesComponent implements OnInit {
  charts: Chart[] = [CHARTS[0]];

  constructor(private assetService: AssetService, private cryprohistoryService: CryptohistoryService) { }

  ngOnInit(): void {
    this.assetService.getAssets('?type=crypto&_expand=currency&_embed=assethistories').subscribe((assets:Array<Asset>) => {
      this.cryprohistoryService.getHistories(assets).subscribe((historyDataArray:Array<any>) => {
        this.charts.push(this.cryprohistoryService.generateGraphFromHistories(historyDataArray, assets));
      });
    });
  }
}
