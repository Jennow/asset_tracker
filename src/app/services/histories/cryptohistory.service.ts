import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { AssetType } from 'src/app/enums/AssetType';
import { ChartType } from 'src/app/enums/ChartType';
import { UserAsset } from 'src/app/model/UserAsset';
import { AssetHistoryItem } from 'src/app/model/AssetHistoryItem';
import { Chart } from 'src/app/model/Chart';
import { CoinCapHistoryItem } from 'src/app/model/CoinCapHistoryItem';
import { HistoryItem } from 'src/app/model/HistoryItem';
import { UserService } from '../collections/user.service';
import { HistoryFormattingService } from './historyformatting.service';

@Injectable({
  providedIn: 'root'
})

export class CryptohistoryService {

  private lastMonth: Date;
  constructor(protected http:HttpClient, protected userService:UserService) { 
    let now:Date   = new Date();
    this.lastMonth = new Date();
    this.lastMonth.setMonth(now.getMonth() - 1);
  }
  /**
   * Get exchangerate history for asset from crypto market api
   * @param asset
   * @returns Observable<any>
   */
  getHistory(asset:UserAsset): Observable<any> {
    const apiUrl   = 'https://api.coincap.io';
    let now:Date   = new Date();
    const url = apiUrl + '/v2/assets/' 
      + asset.identifier +'/history?interval=d1&start='        
      + this.lastMonth.getTime() 
      + '&end=' + now.getTime();

    return this.http.get(url);
  }

  /**
   * Get histories of all passed assets
   * @param assets 
   * @returns Observable<Array<Asset>>
   */
  getHistories(assets:Array<UserAsset>): Observable<Array<UserAsset>> {
    assets = assets.filter(asset => asset.type === AssetType.crypto);
    var observables = assets.map(
      (asset: UserAsset) => this.getHistory(asset));
    return forkJoin(observables);
  }

  /**
   * Combines histories of assets and reformats them to return a Chart object
   * @param historyDataArray array of responses returned from crypto market api
   * @param assets 
   * @returns Chart
   */
  generateGraphFromHistories(historyDataArray:Array<any>, assets:Array<UserAsset>): Chart {
    assets = assets.filter(asset => asset.type === AssetType.crypto);
    var combinedHistory: Array<HistoryItem> = [];

    assets.forEach((asset:UserAsset, index:number) => {
      let histories: Array<CoinCapHistoryItem> = historyDataArray[index].data;
      
      let assetHistory = this.calculatePersonalHistoryForAsset(histories, asset)
      combinedHistory  = this.combineMultipleHistories(combinedHistory, assetHistory);
    });

    const chartData = HistoryFormattingService.formatHistoryForLinearChart(combinedHistory);

    return {
      title: 'Your crypto assets',
      sum: Math.round(chartData[chartData.length - 1][1] * 100) / 100,
      type: ChartType.area,
      data: chartData,
      xaxis: {
        type: 'datetime',
        min: this.lastMonth.getTime(),
        tickAmount: chartData.length,
      },
    } as Chart;

  }

  /**
   * Takes the history values and multiplies them with the amount of the asset at the moment
   * @param history 
   * @param asset 
   * @returns Array<HistoryItem>
   */
   calculatePersonalHistoryForAsset(history:Array<CoinCapHistoryItem>, asset:UserAsset): Array<HistoryItem>{
    let personalHistory: Array<HistoryItem> = [];
    history.forEach(coinCapHistoryItem => {

      let historItemDate = new Date(coinCapHistoryItem.date);
      const lastValidCoinCapHistoryItem  = this.getLastValidHistoryItem(historItemDate, history) as CoinCapHistoryItem;

      // const lastValidPersonalHistoryItem = this.getLastValidHistoryItem(historItemDate, asset.history) as AssetHistoryItem;
      let amount = 2;
      personalHistory.push({
        date: lastValidCoinCapHistoryItem.date,
        close: Math.round(lastValidCoinCapHistoryItem.priceUsd * amount * 100) / 100,
      } as HistoryItem)
    });
    return personalHistory;
  }

  /**
   * Get coincap history item that was valid at the passed date
   * @param date 
   * @param history 
   * @returns CoinCapHistoryItem
   */
     getLastValidHistoryItem(date: Date, history:Array<any> = []): CoinCapHistoryItem|AssetHistoryItem {
      return history.reduce(function(prev, current) {
        let currentDate = new Date(current.date);
        let prevDate    = new Date(prev.date);
        return (currentDate > prevDate && currentDate <= date) ? current : prev;
      })
    }

    /**
     * Adds values of two histories to each other.
     * Histories have to have the same length
     * @param history1 
     * @param history2 
     */
    combineMultipleHistories(history1:Array<HistoryItem>, history2:Array<HistoryItem> ): Array<HistoryItem> {
      for (let timeIndex = 0; timeIndex < history2.length; timeIndex++) {
        let historyItem = history2[timeIndex];
        if(!history1[timeIndex]) {
          history1[timeIndex] = {close: 0, date: historyItem.date}
        }
        history1[timeIndex].close += historyItem.close;
      }
      return history1;
    }

}
