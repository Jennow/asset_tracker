import { Component, Input, OnInit } from '@angular/core';
import { UserAsset } from 'src/app/model/UserAsset';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() assets: UserAsset[];

  constructor() { }

  ngOnInit(): void {}

}
