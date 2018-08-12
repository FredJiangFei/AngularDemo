import { Component } from '@angular/core';
import { OverlayContainer } from '../../node_modules/@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkTheme = false;

  constructor(private oc: OverlayContainer) {
    this.oc.getContainerElement().className = null;
  }

  switchThem(isDarkTheme: boolean) {
    this.darkTheme = isDarkTheme;
    this.oc.getContainerElement().className = isDarkTheme ? 'unicorn-dark-theme' : null;
  }
}
