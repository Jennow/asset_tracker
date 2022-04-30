import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dashboard } from '../model/Dashboard';
import { UserService } from './collections/user.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboard:Dashboard;

  constructor(protected http:HttpClient, protected userService:UserService) { 
  }

  getDashboard():Observable<any> {
    const token = this.userService.getToken() as string;
    console.log(token);
    const url  = environment.apiUrl + '/dashboard';
    
    
    return this.http.get<any>(url);
  }

}
