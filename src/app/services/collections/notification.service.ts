import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../model/Notification';
import { CollectionService } from './collection.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends CollectionService {
  
  /**
   * @returns Observable<Notification[]>
   */
  getNotifications(): Observable<Notification[]> {
    const url = environment.apiUrl + 'notifications?_expand=asset';
    return this.http.get<Notification[]>(url)
  }
}
