import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../model/Notification';
import { CollectionService } from './collection.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends CollectionService {
  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiService.getApiUrl() + 'notifications')
  }
}
