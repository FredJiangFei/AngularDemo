import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, empty } from 'rxjs';
import { mapTo, startWith, merge, scan } from 'rxjs/operators';

@Component({
  selector: 'app-simple-test',
  templateUrl: './simple-test.component.html',
  styleUrls: ['./simple-test.component.css']
})
export class SimpleTestComponent implements OnInit {
  @ViewChild('addButton') addButton: ElementRef;
  @ViewChild('minusButton') minusButton: ElementRef;
  state: number;
  constructor() { }

  ngOnInit() {
    const add$ = fromEvent(this.addButton.nativeElement, 'click').pipe(mapTo(1));
    const minus$ = fromEvent(this.minusButton.nativeElement, 'click').pipe(mapTo(-1));

    const calculate$ = empty().pipe(
      startWith(0),
      merge(add$, minus$),
      scan((org, next) => org + next, 0)
    );

    calculate$.subscribe(x => this.state = x);
  }
}
