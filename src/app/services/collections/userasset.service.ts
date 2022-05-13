import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { AssetType } from 'src/app/enums/AssetType';
import { AssetSummary } from 'src/app/model/AssetSummary';
import { UserAsset } from '../../model/UserAsset';
import { CollectionService } from './collection.service';
import { environment } from '../../../environments/environment';
import { Chart } from 'src/app/model/Chart';

@Injectable({
  providedIn: 'root'
})

export class UserassetService extends CollectionService {

  /**
   * @param filter 
   * @returns Observable<Asset[]>
   */
  getAssets(filter:string = ''): Observable<UserAsset[]> {
    const url = environment.apiUrl + 'userassets' + filter;

    return this.http.get<UserAsset[]>(url)
  }

  /**
   * Get assets with the parameter highlighted set to true
   * @returns Observable<Asset[]> 
   */
  getCards(): Observable<UserAsset[]> {
    return this.getAssets('?highlighted=true')
  }
  
  /**
   * Get Exchange rate of asset
   * TODO: replace mock stock exchange rate with real api request
   * @param asset 
   * @returns Observable<number>
   */
  getExchangeRate(asset:UserAsset):Observable<number> {
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
