import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() open: boolean;
  @Output() toggleMobileSidebar: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  slideSideBar() {
    this.toggleMobileSidebar.emit()
  }
}
