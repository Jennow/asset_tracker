import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/collections/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  errorMessage:string;
  @Output() setLoggedIn = new EventEmitter<boolean>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(res => {
      if (res.error) {
        this.errorMessage = res.error.message
      } else if (res.message !== 'logged_in'){
        this.errorMessage = 'A technical error occured. Please try later.';
        console.log(res);
      } else {
        localStorage.setItem('user', JSON.stringify(res.user));
        this.setLoggedIn.emit(true);
      }
      
    });
  }

}
