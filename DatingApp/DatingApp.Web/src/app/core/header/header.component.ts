import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Store } from '@ngrx/store';
import { LogoutAction } from '../../redux/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  @Output() toggleTheme = new EventEmitter<boolean>();
  photoUrl: string;

  constructor(
    public loginService: LoginService,
    private store$: Store<any>) { }

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
}
