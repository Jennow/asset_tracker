import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { AbstractCollectionService } from './abstractcollection.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractCollectionService{

  private user: User|null = null;

  /**
   * 1. check shared service if variable is already set
   * 2. check localstorage if user is saved there
   * 3. get user from database (Later redirect to login and ask user to reauthenticate)
   * @returns 
   */
  getUser(): User|null {
    if (this.user !== null) {
      return this.user;
    }

    const localStorageUser = localStorage.getItem('user');
    console.log(localStorageUser);

    if (localStorageUser) {
      this.user = JSON.parse(localStorageUser);
      return this.user;
    } 
    
    const url  = this.apiService.getApiUrl() + 'users/1?_expand=currency';
    this.http.get<User>(url).subscribe(res => {
      this.user = res;
      localStorage.setItem('user', JSON.stringify(this.user));
    });

    return this.user;
  }
}
