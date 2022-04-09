import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/model/Transaction';
import { TimeformatService } from 'src/app/services/timeformat.service';
import { TransactionService } from 'src/app/services/collections/transaction.service';
import { UserService } from 'src/app/services/collections/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  public user: User|null;

  constructor( private transactionService:TransactionService, private userService: UserService) {
    this.user = userService.getUser();
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(
      (transactions) => {
        this.transactions = transactions;
        transactions.forEach((transaction, index) => {
          transactions[index].ago = TimeformatService.ago(transaction.createdate);
        });
      }
    )
  }

}
