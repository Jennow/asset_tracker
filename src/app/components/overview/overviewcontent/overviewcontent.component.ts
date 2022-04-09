import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from 'src/app/model/Asset';
import { AssetSummary } from 'src/app/model/AssetSummary';
import { Chart } from 'src/app/model/Chart';
import { AssetService } from 'src/app/services/collections/asset.service';
import { UserService } from 'src/app/services/collections/user.service';

@Component({
  selector: 'app-overviewcontent',
  templateUrl: './overviewcontent.component.html',
  styleUrls: ['./overviewcontent.component.css']
})
export class OverviewcontentComponent implements OnInit {
  @Input() chart:Chart;
  summary: AssetSummary;
  public user;

  constructor(private userService: UserService, private assetService: AssetService) { 
    this.user    = userService.getUser();


  }

  ngOnInit(): void {
    this.assetService.getAllAssets().subscribe((assets: Array<Asset>) => {
      this.assetService.getSummary(assets).subscribe((summary) => {
        this.summary = summary;
      });
    });
  }

}
