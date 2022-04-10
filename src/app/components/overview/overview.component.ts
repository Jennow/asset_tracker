import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/model/Asset';
import { AssetSummary } from 'src/app/model/AssetSummary';
import { Chart } from 'src/app/model/Chart';
import { AssetService } from 'src/app/services/collections/asset.service';
import { UserService } from 'src/app/services/collections/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  chart:Chart;
  summary: AssetSummary;
  public user;

  constructor(private userService: UserService, private assetService: AssetService) { 
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
    this.assetService.getAssets().subscribe((assets: Array<Asset>) => {
        this.summary = this.assetService.getSummary(assets);
        this.chart = this.summary.piechart;
    });
  }
}
