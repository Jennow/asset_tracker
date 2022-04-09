import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileSlideBarOpen = false;
  // cards: Card = [];
  toggleMobileSidebar() {
    console.log('HI')
    this.mobileSlideBarOpen = !this.mobileSlideBarOpen;
  }
}
