import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  start = 10;
  @Output() countOver = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.countDown();
  }

  countDown() {
    this.start--;
    if (this.start === 0) {
      this.start = 10;
      this.countOver.emit();
    }

    setTimeout(() => {
      this.countDown();
    }, 1000);
  }
}
