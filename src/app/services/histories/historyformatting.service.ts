import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssetHistoryItem } from 'src/app/model/AssetHistoryItem';
import { CoinCapHistoryItem } from 'src/app/model/CoinCapHistoryItem';
import { HistoryItem } from 'src/app/model/HistoryItem';
import { UserService } from '../collections/user.service';

@Injectable({
  providedIn: 'root'
})

export class HistoryFormattingService {

  /**
   * Sort any history by date in ascending order
   * @param history 
   * @returns 
   */
  static sortHistory(history:AssetHistoryItem[]|HistoryItem[]|CoinCapHistoryItem[]) {
    return history.sort((a,b) => {
      let aDate = new Date(a.date);
      let bDate = new Date(b.date);
      return (aDate > bDate) ? 1 : ((bDate > aDate) ? -1 : 0);
    });
  }

  /**
   * Find a history item by date
   * @param history 
   * @param date 
   * @returns number
   */
  static findItemByDate(history:AssetHistoryItem[]|HistoryItem[]|CoinCapHistoryItem[], date:string):number {
    return history.findIndex((historyItem) => {
      let historyItemDate = new Date(historyItem.date).toDateString();
      let transactionDate = new Date(date).toDateString();
      return historyItemDate === transactionDate;
    });
  }

  /**
   * Takes a HistoryItem and reformats it to use it as chartdata for a candlestick chart
   * // TODO: Candlestick chart component not implemented yet
   * @param history 
   * @returns 
   */
  static formatHistoryForCandleStickChart(history:Array<HistoryItem>): Array<any> {
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
  static formatHistoryForLinearChart(history:Array<HistoryItem>): Array<Array<any>> {
    let chartData:Array<Array<any>> = [];
    history.forEach((element:HistoryItem) => {
      chartData.push([element.date, element.close])
    });
    return chartData;
  }
}
