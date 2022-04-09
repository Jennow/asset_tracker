import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'src/app/model/Chart';
import { UserService } from 'src/app/services/collections/user.service';

@Component({
  selector: 'app-overviewcontent',
  templateUrl: './overviewcontent.component.html',
  styleUrls: ['./overviewcontent.component.css']
})
export class OverviewcontentComponent implements OnInit {
  @Input() chart:Chart;
  public user;

  constructor(private userService: UserService) { 
    this.user = userService.getUser();
  }

  ngOnInit(): void {
  }

}
