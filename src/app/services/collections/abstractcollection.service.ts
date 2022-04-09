import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractCollectionService {
  protected apiService: ApiService;

  constructor(protected http:HttpClient) { 
    this.apiService = new ApiService();
  }
}
