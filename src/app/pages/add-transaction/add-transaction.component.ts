import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/model/Asset';
import { Transaction } from 'src/app/model/Transaction';
import { AssetService } from 'src/app/services/collections/asset.service';
import { TransactionService } from 'src/app/services/collections/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  assets:Array<Asset>;
  value:number;
  selectedAsset:Asset;
  date:string;

  
  constructor(private assetService: AssetService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.date = new Date().toISOString().split('T')[0];
    this.assetService.getAssets().subscribe((assets) => {
      this.assets = assets
    });
  }

  saveTransaction() {
    // TODO: Beautify form validation
    if (!this.selectedAsset || !this.value || !this.date) {
      alert('Please fill out form!');
      return;
    }
    const transaction = {
      value: this.value,
      createdate: this.date,
      asset: this.selectedAsset,
      status: 1,
    };
    this.transactionService.saveTransaction(transaction).subscribe((response) => {
      console.log(response)
    });
  }

}
