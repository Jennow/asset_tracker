import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { ApiService } from '../api.service';
import { AbstractCollectionService } from './abstractcollection.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user: User|null = null;

  constructor(protected http:HttpClient,  protected apiService:ApiService) { 
  }

  /**
   * 1. check shared service if variable is already set
   * 2. check localstorage if user is saved there
   * 3. get user from database (Later redirect to login and ask user to reauthenticate)
   * @returns User
   */
  getUser():User {
    if (this.user !== null) {
      return this.user;
    }

    const localStorageUser = localStorage.getItem('user');

    if (localStorageUser) {
      this.user = JSON.parse(localStorageUser) as User;
      return this.user;
    } 
    
    const url  = this.apiService.getApiUrl() + 'users/1?_expand=currency';
    this.http.get<User>(url).subscribe(res => {
      this.user = res as User;
      localStorage.setItem('user', JSON.stringify(this.user));
      return this.user
    });

    throw {'error': 'Couldn\'t find user'};
  }
}
