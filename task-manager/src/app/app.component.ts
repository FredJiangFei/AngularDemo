import { Component } from '@angular/core';
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
      //keyframes
      transition('green => red', animate('1s ease-in')),
      transition('red => green', animate('1s ease-out')),
    ])
  ]
})
export class AppComponent {
  darkTheme = false;
  squareState: string ='green';

  constructor(private oc: OverlayContainer) {
    this.oc.getContainerElement().className = null;
  }

  switchThem(isDarkTheme: boolean) {
    this.darkTheme = isDarkTheme;
    this.oc.getContainerElement().className = isDarkTheme ? 'unicorn-dark-theme' : null;
  }

  onClick() {
    this.squareState = this.squareState == 'red' ? 'green' : 'red';
  }
}
