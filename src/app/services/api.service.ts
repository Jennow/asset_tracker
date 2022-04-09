import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/'

  constructor() { }

  getApiUrl():string {
    return this.apiUrl;
  }

  getApiHeaders():string {
    //TODO: Setup real api connection 
    return '';
  }
}
