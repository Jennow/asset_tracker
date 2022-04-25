import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/model/Asset';
import { AssetService } from 'src/app/services/collections/asset.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  assets: Asset[] = [];

  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
    this.assetService.getAssets().subscribe((assets) => {
        this.assets = assets;
        console.log(this.assets)
      }
    );
  }

}
