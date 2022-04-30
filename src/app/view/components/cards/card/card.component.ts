import { Component, OnInit, Input } from '@angular/core';
import { Asset } from 'src/app/model/Asset';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/collections/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Asset;
  user: User|null;

  constructor(private userService: UserService) { 
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
  }

}
