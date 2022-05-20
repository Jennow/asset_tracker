import { Injectable } from '@angular/core';
import { AssetHistoryItem } from 'src/app/model/AssetHistoryItem';
import { HistoryItem } from 'src/app/model/HistoryItem';

@Injectable({
  providedIn: 'root'
})

export class HistoryFormattingService {

  /**
   * Find a history item by date
   * @param history 
   * @param date 
   * @returns number
   */
  static findItemByDate(history:AssetHistoryItem[]|HistoryItem[], date:string):number {
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
  static formatHistoryForLinearChart(history:Array<any>): Array<Array<any>> {
    let chartData:Array<Array<any>> = [];
    history.forEach((element:any) => {
      chartData.push([element.date, element.close])
    });
    return chartData;
  }
}
