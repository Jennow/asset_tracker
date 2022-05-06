import { Component, OnInit } from '@angular/core';
import { UserAsset } from 'src/app/model/UserAsset';
import { AssetSummary } from 'src/app/model/AssetSummary';
import { Dashboard } from 'src/app/model/Dashboard';
import { UserassetService } from 'src/app/services/collections/userasset.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  assets: UserAsset[] = [];
  dashboard: Dashboard;
  summary: AssetSummary;

  constructor(private assetService: UserassetService, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe((dashboard) => {
      this.dashboard = dashboard;
      this.dashboard.overview = this.assetService.getSummary(dashboard.userAssets);
      console.log(this.dashboard.overview);
    });
  }

}
