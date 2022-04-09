import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarlink',
  templateUrl: './sidebarlink.component.html',
  styleUrls: ['./sidebarlink.component.css']
})
export class SidebarlinkComponent implements OnInit {
  @Input() url: string;
  @Input() title: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
