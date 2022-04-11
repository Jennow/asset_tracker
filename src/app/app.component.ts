import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileSlideBarOpen = false;
  // cards: Card = [];
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.toggleMobileSidebar(false);
      }
    });
  }

  toggleMobileSidebar(open?: boolean) {
    if (open === true || open === false) {
      this.mobileSlideBarOpen = open;
    } else {
      this.mobileSlideBarOpen = !this.mobileSlideBarOpen;
    }
  }
}
