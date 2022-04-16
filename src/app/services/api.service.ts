import { Injectable, NgModule } from '@angular/core';

Injectable({
  providedIn: 'root'
})

@NgModule (
  
)
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
}
