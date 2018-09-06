import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {
  movePos$: any;
  constructor() { }

  followMouse(DOMArr) {
    const delayTime = 600;
    DOMArr.forEach((item, index) => {
      this.movePos$
        .pipe(delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2))
        .subscribe(function (pos) {
          item.style.transform = 'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
        });
    });
  }

  ngOnInit() {
    const imgList = document.getElementsByTagName('img');
    this.movePos$ = fromEvent<MouseEvent>(document, 'mousemove')
    .pipe(
      map(e => ({ x: e.clientX, y: e.clientY }))
    );
    this.followMouse(Array.from(imgList));
  }
}
