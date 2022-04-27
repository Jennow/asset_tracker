import { ConstantPool } from '@angular/compiler';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UserService } from './services/collections/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mobileSlideBarOpen = false;
  loggedIn:boolean = false;

  constructor(private router: Router, private userService: UserService) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.toggleMobileSidebar(false);
      }
    });
  }
  ngOnInit(): void {
    if (this.userService.getUser()) {
      this.setLoggedIn(true);
    }
  }
  setLoggedIn(value:boolean) {
    this.loggedIn = value;
  }
  toggleMobileSidebar(open?: boolean) {
    if (open === true || open === false) {
      this.mobileSlideBarOpen = open;
    } else {
      this.mobileSlideBarOpen = !this.mobileSlideBarOpen;
    }
  }
}
