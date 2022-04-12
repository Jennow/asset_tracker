import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Asset } from 'src/app/model/Asset';
import { Transaction } from '../../model/Transaction';
import { ApiService } from '../api.service';
import { CollectionService } from './collection.service';
import { AssetService } from './asset.service';
import { UserService } from './user.service';
import { HistoryItem } from 'src/app/model/HistoryItem';
import { AssetHistoryItem } from 'src/app/model/AssetHistoryItem';
import { CoinCapHistoryItem } from 'src/app/model/CoinCapHistoryItem';
import { HistoryFormattingService } from '../histories/historyformatting.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends CollectionService {
  
  constructor(override http:HttpClient,  override apiService:ApiService, override userService:UserService, protected assetService: AssetService) { 
    super(http, apiService, userService)
  }

  /**
   * @returns Observable<Transaction[]>
   */
  getTransactions(): Observable<Transaction[]> {
    const url:string = this.apiService.getApiUrl() + 'transactions?_expand=asset';
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
    const url:string   = this.apiService.getApiUrl() + 'transactions?_expand=asset';
    var post:any       = transaction;
    const asset: Asset = transaction.asset;

    post.assetId       = transaction.asset.id;
    delete(post.asset);

    return this.http.post(url, post).pipe(
      switchMap((value: Object, index: number) => {
        return this.assetService.getExchangeRate(asset)
      }),
      switchMap((exchangeRate: number, index: number) => {
        console.log(exchangeRate);
        const url = this.apiService.getApiUrl() + 'assets/' + asset.id;
        let put   = asset;

        put.history = HistoryFormattingService.sortHistory(asset.history) as AssetHistoryItem[];
        let existingHistoryItemIndex = HistoryFormattingService.findItemByDate(put.history, transaction.createdate)

        if (existingHistoryItemIndex === -1) {
          put.history.push({
            date: transaction.createdate,
            amount: transaction.amount
          });
          put.history = HistoryFormattingService.sortHistory(asset.history) as AssetHistoryItem[];
          existingHistoryItemIndex = 1 + HistoryFormattingService.findItemByDate(put.history, transaction.createdate)
        }

        for(let i = existingHistoryItemIndex; i < put.history.length; i++) {
          put.history[i].amount += transaction.amount
        }

        put.amount += transaction.amount;
        put.sum = Math.round(transaction.amount * exchangeRate * 100) / 100;
        return this.http.put(url, put);
      })
    )
  }
}
