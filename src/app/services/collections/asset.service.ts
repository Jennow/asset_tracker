import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, switchMap } from 'rxjs';
import { AssetHistory } from 'src/app/model/AssetHistory';
import { AssetSummary } from 'src/app/model/AssetSummary';
import { Asset } from '../../model/Asset';
import { AbstractCollectionService } from './abstractcollection.service';

@Injectable({
  providedIn: 'root'
})

export class AssetService extends AbstractCollectionService {
  getAllAssets() {
    const url = this.apiService.getApiUrl() + 'assets';
    return this.http.get<Asset[]>(url)
  }

  getCards(): Observable<Asset[]> {
    const url = this.apiService.getApiUrl() + 'assets?highlighted=true';
    return this.http.get<Asset[]>(url)
  }
  
  getSummary(assets: Array<Asset>): Observable<any> {
    let total = 0;
    assets.forEach((value: Asset) => total += value.sum);
    const summary = {
          sum: total,
          comparisonLastMonth: -10, // TODO: Get this value fom history
          comparisonLastYear: 2,    // TODO: Get this value from history
        } as AssetSummary;

    return new Observable<AssetSummary>(observer => {
      observer.next(summary)
    });
  }
  
  getHistory() {

  }
}
