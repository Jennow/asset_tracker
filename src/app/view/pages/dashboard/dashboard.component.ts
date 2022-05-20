import { Component, OnInit, SimpleChange } from '@angular/core';
import { UserAsset } from 'src/app/model/UserAsset';
import { AssetSummary } from 'src/app/model/AssetSummary';
import { Dashboard } from 'src/app/model/Dashboard';
import { UserassetService } from 'src/app/services/collections/userasset.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Chart } from 'src/app/model/Chart';
import { HistoryFormattingService } from 'src/app/services/histories/historyformatting.service';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  assets: UserAsset[] = [];
  dashboard: Dashboard;
  summary: AssetSummary;
  chart: Chart;


  constructor(private assetService: UserassetService, private dashboardService: DashboardService, private chartService: ChartService) { }

  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe((dashboard) => {
      this.dashboard = dashboard;
      console.log(this.dashboard.overview);
      this.dashboard.personalizedHistories.forEach(history => {
        const chartData = HistoryFormattingService.formatHistoryForLinearChart(history.data);
        this.chart = this.chartService.getLinearChart(chartData);     
      });
    });


  }

  ngOnChanges(changes: SimpleChange) {

  }

}
