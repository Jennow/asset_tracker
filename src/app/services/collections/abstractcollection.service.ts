import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractCollectionService {

  constructor(protected http:HttpClient,  protected apiService:ApiService,protected userService:UserService) { 
  }
}
