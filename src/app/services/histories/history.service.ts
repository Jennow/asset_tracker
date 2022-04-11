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

  /**
   * Takes a HistoryItem and reformats it to use it as chartdata for a candlestick chart
   * // TODO: Candlestick chart component not implemented yet
   * @param history 
   * @returns 
   */
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

  /**
   * Takes a HistoryItem and reformats it to use it as chartdata for a linear chart
   * @param history 
   * @returns 
   */
  formatHistoryForLinearChart(history:Array<HistoryItem>): Array<Array<any>> {
    let chartData:Array<Array<any>> = [];
    history.forEach((element:HistoryItem) => {
      chartData.push([element.date, element.close])
    });
    return chartData;
  }
}
