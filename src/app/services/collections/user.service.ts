import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user: User|null = null;

  constructor(protected http:HttpClient) { 
  }

  login(username:string, password:string):Observable<any> {
    const url  = environment.apiUrl + '/login';
    return this.http.post<any>(url, {username, password});
  }

  /**
   * 1. check shared service if variable is already set
   * 2. check localstorage if user is saved there
   * 3. get user from database (Later redirect to login and ask user to reauthenticate)
   * @returns User
   */
  getUser():User|null {
    if (this.user !== null) {
      return this.user;
    }

    const localStorageUser = localStorage.getItem('user');

    if (localStorageUser) {
      this.user = JSON.parse(localStorageUser) as User;
      return this.user;
    } 

    return null;
  }

  getToken():string | null {
    return localStorage.getItem('token');
  }
}
