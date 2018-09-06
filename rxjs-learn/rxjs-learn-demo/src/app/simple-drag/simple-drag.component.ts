import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, takeUntil, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-simple-drag',
  templateUrl: './simple-drag.component.html',
  styleUrls: ['./simple-drag.component.css']
})
export class SimpleDragComponent implements OnInit {

  @ViewChild('dragElement') dragElement: ElementRef;

  constructor() { }

  ngOnInit() {
    const dragMousedown$ = fromEvent(this.dragElement.nativeElement, 'mousedown');

    const body = document.body;
    const bodyUp$ = fromEvent(body, 'mouseup');
    const bodyMove$ = fromEvent(body, 'mousemove');

    const source$ = dragMousedown$.pipe(
          map(e => bodyMove$.pipe(takeUntil(bodyUp$))),
          concatAll(),
          map(event => ({ x: event.srcElement.clientLeft, y: event.srcElement.clientTop }))
    );

    source$.subscribe(pos => {
      this.dragElement.nativeElement.style.left = pos.x + 'px';
      this.dragElement.nativeElement.style.top = pos.y + 'px';
    });
  }

}
