import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Asset } from 'src/app/model/Asset';
import { Transaction } from '../../model/Transaction';
import { ApiService } from '../api.service';
import { AbstractCollectionService } from './abstractcollection.service';
import { AssetService } from './asset.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends AbstractCollectionService {
  
  constructor(override http:HttpClient,  override apiService:ApiService, override userService:UserService, protected assetService: AssetService) { 
    super(http, apiService, userService)
  }
  getTransactions(): Observable<Transaction[]> {
    const url = this.apiService.getApiUrl() + 'transactions?_expand=asset';
    return this.http.get<Transaction[]>(url);
  }

  /**
   * Save new transaction
   * Get Exchange rate from Database and add current value of transaction to asset value
   * TODO: With a real backend I would run a cronjob to update asset exchange rates regularly
   * @param transaction 
   * @returns 
   */
  saveTransaction(transaction:Transaction) {
    const url    = this.apiService.getApiUrl() + 'transactions?_expand=asset';
    var post     = transaction as any;
    post.assetId = transaction.asset.id;
    const asset  = transaction.asset;
    delete(post.asset);

    return this.http.post(url, post).pipe(
      switchMap((value: Object, index: number) => {
        console.log('SWICTHMAP');
        const url = this.apiService.getApiUrl() + 'assets/' + asset.id;
        return this.http.get(url);
      }),
      switchMap((value: Object, index: number) => {
        return this.assetService.getExchangeRate(value as Asset)
      }),
      switchMap((exchangeRate: number, index: number) => {
        const url = this.apiService.getApiUrl() + 'assets/' + asset.id;
        let put = asset;
  
        put.history.push({
          date: transaction.createdate,
          amount: transaction.value
        });

        put.sum = transaction.value * exchangeRate;
        return this.http.put(url, put);
      })
    )
  }
}
