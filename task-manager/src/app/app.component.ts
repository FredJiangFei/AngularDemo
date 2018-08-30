import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './service/login.service';
import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '../../node_modules/@angular/cdk/overlay';
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

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginService.loginUser = this.jwtService.decodeToken(token);
    }
  }

  constructor(private oc: OverlayContainer, private loginService: LoginService) {
    this.oc.getContainerElement().className = null;
  }

  switchThem(isDarkTheme: boolean) {
    this.darkTheme = isDarkTheme;
    this.oc.getContainerElement().className = isDarkTheme ? 'unicorn-dark-theme' : null;
  }

  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
