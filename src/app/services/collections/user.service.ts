import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { ApiService } from '../api.service';
import { CollectionService } from './collection.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user: User|null = null;

  constructor(protected http:HttpClient,  protected apiService:ApiService) { 
  }

  login(username:string, password:string) {
    // TODO: Let all API calls run over the ral api instead of json server
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
}
