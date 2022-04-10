import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { AssetType } from 'src/app/enums/AssetType';
import { AssetSummary } from 'src/app/model/AssetSummary';
import { Asset } from '../../model/Asset';
import { AbstractCollectionService } from './abstractcollection.service';

@Injectable({
  providedIn: 'root'
})

export class AssetService extends AbstractCollectionService {

  getAssets(filter?:string) {
    filter = filter?filter:'';
    const url = this.apiService.getApiUrl() + 'assets' + filter;
    return this.http.get<Asset[]>(url)
  }

  getCards(): Observable<Asset[]> {
    return this.getAssets('?highlighted=true')
  }
  
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
      sum: total,
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

  getExchangeRate(asset:Asset) {
    if (asset.type === AssetType.crypto) {
      const apiUrl   = 'https://api.coincap.io';
      return this.http.get(apiUrl + '/v2/assets/' + asset.identifier).pipe(
        switchMap((response:any) => {
          return of(Math.round(response.data.priceUsd * 100) / 100)
        })
      )
    }
    return of(Math.floor((Math.random() * 500) + 10));
  }

}
