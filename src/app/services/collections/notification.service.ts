import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../model/Notification';
import { AbstractCollectionService } from './abstractcollection.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends AbstractCollectionService {
  getNotifications(): Observable<Notification[]> {
    const url = this.apiService.getApiUrl() + 'notifications?_expand=asset';
    return this.http.get<Notification[]>(url)
  }
}
