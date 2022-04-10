import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../../model/Transaction';
import { AbstractCollectionService } from './abstractcollection.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends AbstractCollectionService {
  getTransactions(): Observable<Transaction[]> {
    const url = this.apiService.getApiUrl() + 'transactions?_expand=asset';
    return this.http.get<Transaction[]>(url);
  }

  saveTransaction(transaction:any) {
    const url = this.apiService.getApiUrl() + 'transactions?_expand=asset';
    return this.http.post(url, transaction);
  }
}
