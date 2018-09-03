import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  closeSideBar = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
    this.closeSideBar.emit();
  }
}
