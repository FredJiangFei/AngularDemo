import { PopupService } from './service/popup.service';
import { PopupComponent } from './share/popup/popup.component';
import { createCustomElement } from '@angular/elements';
import { User } from './domain/user.domain';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './service/login.service';
import { Component, OnInit, Injector } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('square', [
      state('green', style({ 'background-color': 'green', 'transform': 'translateX(0)' })),
      state('red', style({ 'background-color': 'red', 'transform': 'translateX(100%)' })),
      // transition('green => red', animate('2s 1s')),
      // transition('red => green', animate(1000)),
      // keyframes
      transition('green => red', animate('1s ease-in')),
      transition('red => green', animate('1s ease-out')),
    ])
  ]
})
export class AppComponent implements OnInit {

  darkTheme = false;
  squareState = 'green';
  jwtService = new JwtHelperService();

  constructor(
    private oc: OverlayContainer,
    private loginService: LoginService,
    injector: Injector) {
    this.oc.getContainerElement().className = null;

     const PopupElement = createCustomElement(PopupComponent, {injector});
     customElements.define('popup-element', PopupElement);
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginService.decodedToken = this.jwtService.decodeToken(token);
    }

    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.loginService.currentUser = user;
      this.loginService.changeMemberPhoto(user.photoUrl);
    }
  }

  switchThem(isDarkTheme: boolean) {
    this.darkTheme = isDarkTheme;
    this.oc.getContainerElement().className = isDarkTheme ? 'unicorn-dark-theme' : null;
  }

  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
