import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoryItem } from 'src/app/model/HistoryItem';
import { ApiService } from '../api.service';
import { UserService } from '../collections/user.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(protected http:HttpClient,  protected apiService:ApiService,protected userService:UserService) { 
  }

  formatHistoryForCandleStickChart(history:Array<HistoryItem>): Array<any> {
    let chartData:Array<object> = [];
    history.forEach((element:HistoryItem) => {
      chartData.push(
        {
          x: element.date,
          y: [element.open, element.high, element.low, element.close]
        }
      )
    });
    return chartData;
  }

  formatHistoryForLinearChart(history:Array<HistoryItem>): Array<Array<any>> {
    let chartData:Array<Array<any>> = [];
    history.forEach((element:HistoryItem) => {
      chartData.push([element.date, element.close])
    });
    return chartData;
  }
}
