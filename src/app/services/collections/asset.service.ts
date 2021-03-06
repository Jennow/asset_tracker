import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { AssetType } from 'src/app/enums/AssetType';
import { AssetSummary } from 'src/app/model/AssetSummary';
import { Asset } from '../../model/Asset';
import { CollectionService } from './collection.service';

@Injectable({
  providedIn: 'root'
})

export class AssetService extends CollectionService {

  /**
   * @param filter 
   * @returns Observable<Asset[]>
   */
  getAssets(filter:string = ''): Observable<Asset[]> {
    const url = this.apiService.getApiUrl() + 'assets' + filter;
    return this.http.get<Asset[]>(url)
  }

  /**
   * Get assets with the parameter highlighted set to true
   * @returns Observable<Asset[]> 
   */
  getCards(): Observable<Asset[]> {
    return this.getAssets('?highlighted=true')
  }
  
  /**
   * Generate summary data of asset array. Used in overview component
   * @param assets 
   * @returns AssetSummary
   */
  getSummary(assets: Array<Asset>): AssetSummary {
    let total = 0;
    let chartData:Array<number> = [];
    let labels:Array<string> = [];

    assets.forEach((asset: Asset) =>  {
        total += asset.sum
        chartData.push(asset.sum)
        labels.push(asset.name)
    });
    return {
      sum: Math.round(total * 100) / 100,
      comparisonLastMonth: -10, // TODO: Get this value fom history
      comparisonLastYear: 2,    // TODO: Get this value from history
      piechart: {
        "title": "assets",
        "icon": "fa-store",
        "type": "pie",
        "data": chartData,
        "labels": labels,
        "sum": 300,
      }
    } as AssetSummary;   
  }

  /**
   * Get Exchange rate of asset
   * TODO: replace mock stock exchange rate with real api request
   * @param asset 
   * @returns Observable<number>
   */
  getExchangeRate(asset:Asset):Observable<number> {
    if (asset.type === AssetType.crypto) {
      const apiUrl = 'https://api.coincap.io';
      return this.http.get(apiUrl + '/v2/assets/' + asset.identifier).pipe(
        switchMap((response:any) => {
          return of(Math.round(response.data.priceUsd * 100) / 100)
        })
      )
    }
    return of(Math.floor((Math.random() * 500) + 10));
  }
}
