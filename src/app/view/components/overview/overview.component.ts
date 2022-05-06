import { Component, Input, OnInit } from '@angular/core';
import { UserAsset } from 'src/app/model/UserAsset';
import { AssetSummary } from 'src/app/model/AssetSummary';
import { Chart } from 'src/app/model/Chart';
import { UserService } from 'src/app/services/collections/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  chart:Chart;
  @Input() assets: UserAsset[];
  @Input() summary: AssetSummary;
  public user;

  constructor(private userService: UserService) { 
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {}
}
