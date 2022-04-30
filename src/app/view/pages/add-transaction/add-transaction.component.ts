import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from 'src/app/model/Asset';
import { AssetService } from 'src/app/services/collections/asset.service';
import { TransactionService } from 'src/app/services/collections/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  assets:Array<Asset>;
  amount:number;
  selectedAsset:Asset;
  dateString:string;

  
  constructor(private _router: Router, private assetService: AssetService, private transactionService: TransactionService) { }

  ngOnInit(): void {
    const date      = new Date()
    this.dateString = date.toISOString().split('T')[0];
    this.assetService.getAssets().subscribe((assets) => {
      this.assets = assets
    });
  }

  saveTransaction() {
    // TODO: Beautify form validation
    if (!this.selectedAsset || !this.amount || !this.dateString) {
      alert('Please fill out form!');
      return;
    }

    const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    const date = new Date(this.dateString.replace(pattern,'$3-$2-$1'));

    const transaction = {
      amount: this.amount,
      createdate: date.toISOString(),
      asset: this.selectedAsset,
      status: 1,
    };
    this.transactionService.saveTransaction(transaction).subscribe((response) => {
      // TODO: Handle errors
      this._router.navigateByUrl('');
    });
  }

}
