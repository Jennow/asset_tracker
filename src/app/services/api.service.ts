import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl:string = 'http://localhost:5000/'
  private headers:Array<any> = [];

  constructor() { }

  setApiUrl(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  getApiUrl():string {
    return this.apiUrl;
  }

  getApiHeaders():Array<any> {
    return this.headers;
  }

  setApiHeaders(headers: Array<any>) {
    this.headers = headers;
  }
}
