import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'src/app/model/Asset';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() assets: Asset[];

  constructor() { }

  ngOnInit(): void {}

}
