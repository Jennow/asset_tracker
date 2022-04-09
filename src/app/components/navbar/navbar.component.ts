import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Notification } from 'src/app/model/Notification';
import { NotificationService } from 'src/app/services/collections/notification.service.spec';
import { TimeformatService } from 'src/app/services/timeformat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  notifications: Notification[] = [];
  notificationsDropped: boolean = false;
  @Output() toggleMobileSidebar: EventEmitter<null> = new EventEmitter();

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe(
      (notifications) => {
        this.notifications = notifications;

        this.notifications.forEach((transaction, index) => {
          this.notifications[index].ago = TimeformatService.ago(transaction.createdate);
        });
      }
    );
  }

  toggleDropdown() {
    this.notificationsDropped = !this.notificationsDropped;
  }

  slideSideBar() {
    this.toggleMobileSidebar.emit()
  }

}
