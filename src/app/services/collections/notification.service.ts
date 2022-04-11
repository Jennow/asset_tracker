import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../model/Notification';
import { CollectionService } from './collection.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends CollectionService {
  
  /**
   * @returns Observable<Notification[]>
   */
  getNotifications(): Observable<Notification[]> {
    const url = this.apiService.getApiUrl() + 'notifications?_expand=asset';
    return this.http.get<Notification[]>(url)
  }
}
