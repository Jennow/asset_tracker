import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../model/Notification';
import { CollectionService } from './collection.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends CollectionService {
  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(environment.apiUrl + 'notifications')
  }
}
