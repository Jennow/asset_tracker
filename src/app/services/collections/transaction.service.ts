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

  /**
   * @returns Observable<Transaction[]>
   */
  getTransactions(): Observable<Transaction[]> {
    const url = this.apiService.getApiUrl() + 'transactions?_expand=asset';
    return this.http.get<Transaction[]>(url);
  }

  /**
   * Save new transaction
   * Get Exchange rate from Database and add current value of transaction to asset value
   * Also add value to all asset history items from that date on
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
        const url = this.apiService.getApiUrl() + 'assets/' + asset.id;
        return this.http.get(url);
      }),
      switchMap((value: Object, index: number) => {
        return this.assetService.getExchangeRate(value as Asset)
      }),
      switchMap((exchangeRate: number, index: number) => {
        const url = this.apiService.getApiUrl() + 'assets/' + asset.id;
        let put = asset;

        put.history = asset.history.sort((a,b) => {
          let aDate = new Date(a.date).toDateString();
          let bDate = new Date(b.date).toDateString();
          return (aDate > bDate) ? 1 : ((bDate > aDate) ? -1 : 0);
        });

        let existingHistoryItemIndex = put.history.findIndex((historyItem) => {
            let historyItemDate = new Date(historyItem.date).toDateString();
            let transactionDate = new Date(transaction.createdate).toDateString();
            return historyItemDate === transactionDate;
        });

        if (existingHistoryItemIndex > -1) {
          for(let i = index; i < put.history.length; i++) {
            put.history[i].amount += transaction.amount
          }
        } else {
          put.history.push({
            date: transaction.createdate,
            amount: transaction.amount
          });
        }

        put.amount += transaction.amount;
        put.sum = Math.round(transaction.amount * exchangeRate * 100) / 100,;
        return this.http.put(url, put);
      })
    )
  }
}
