import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/model/Asset';
import { AssetSummary } from 'src/app/model/AssetSummary';
import { AssetService } from 'src/app/services/collections/asset.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  assets: Asset[] = [];
  summary: AssetSummary;

  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
    this.assetService.getAssets('?_expand=currency&_embed=assethistories').subscribe((assets) => {
        this.assets = assets;
        this.summary = this.assetService.getSummary(assets);
      }
    );
  }

}
