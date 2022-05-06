import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UserAsset } from 'src/app/model/UserAsset';
import { Transaction } from '../../model/Transaction';
import { CollectionService } from './collection.service';
import { UserassetService } from './userasset.service';
import { UserService } from './user.service';
import { AssetHistoryItem } from 'src/app/model/AssetHistoryItem';
import { HistoryFormattingService } from '../histories/historyformatting.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends CollectionService {
  
  constructor(override http:HttpClient, override userService:UserService, protected assetService: UserassetService) { 
    super(http, userService)
  }

  
  /**
   * @returns Observable<Transaction[]>
   */
  getTransactions(): Observable<Transaction[]> {
    const url:string = environment.apiUrl + 'transactions?_expand=asset';
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
    const url:string       = environment.apiUrl + 'transactions?';
    var post:any           = transaction;
    const asset: UserAsset = transaction.userasset;

    post.userassetid       = transaction.userasset.id;
    delete(post.asset);

    return this.http.post(url, post).pipe(
      switchMap((value: Object, index: number) => {
        return this.assetService.getExchangeRate(asset)
      }),
      // TODO: update history in API, not in frontend!!!
      // switchMap((exchangeRate: number, index: number) => {
      //   const url = environment.apiUrl + 'assets/' + asset.id;
      //   let put   = asset;

      //   put.history = HistoryFormattingService.sortHistory(asset.history) as AssetHistoryItem[];
      //   let existingHistoryItemIndex = HistoryFormattingService.findItemByDate(put.history, transaction.createdate)

      //   if (existingHistoryItemIndex === -1) {
      //     put.history.push({
      //       date: transaction.createdate,
      //       amount: transaction.amount
      //     });
      //     put.history = HistoryFormattingService.sortHistory(asset.history) as AssetHistoryItem[];
      //     existingHistoryItemIndex = 1 + HistoryFormattingService.findItemByDate(put.history, transaction.createdate)
      //   }

      //   for(let i = existingHistoryItemIndex; i < put.history.length; i++) {
      //     put.history[i].amount += transaction.amount
      //   }

      //   put.amount += transaction.amount;
      //   put.sum = Math.round(transaction.amount * exchangeRate * 100) / 100;
      //   return this.http.put(url, put);
      // })
    )
  }
}
