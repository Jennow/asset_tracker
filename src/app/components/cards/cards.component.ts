import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/model/Asset';
import { AssetService } from 'src/app/services/collections/asset.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Asset[] = [];

  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
    this.assetService.getCards().subscribe((cards) => {
        this.cards = cards;
      }
    );
  }

}
