import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  @Output() toggleTheme = new EventEmitter<boolean>();
  photoUrl: string;

  constructor(public loginService: LoginService,
   private router: Router) { }

  ngOnInit() {
    this.loginService.currentPhotoUrl.subscribe(x => this.photoUrl = x);
  }

  toggleMenu() {
    this.toggle.emit();
  }

  onChange(checked: boolean) {
    this.toggleTheme.emit(checked);
  }

  loggedIn() {
    return this.loginService.loggedIn();
  }

  logout() {
    this.loginService.logout();
  }

  editProfile() {
    this.router.navigate(['/profile']);
  }
}
