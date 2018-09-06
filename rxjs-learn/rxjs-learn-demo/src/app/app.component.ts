import { Component, OnInit } from '@angular/core';
import { from, zip, interval, Subject, ReplaySubject } from 'rxjs';
import { groupBy, map, mergeAll, reduce, take, share } from 'rxjs/operators';
import { setHostBindings } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-learn-demo';
  people = [
      {name: 'Anna', score: 100, subject: 'English'},
      {name: 'Anna', score: 90, subject: 'Math'},
      {name: 'Anna', score: 96, subject: 'Chinese' },
      {name: 'Jerry', score: 80, subject: 'English'},
      {name: 'Jerry', score: 100, subject: 'Math'},
      {name: 'Jerry', score: 90, subject: 'Chinese' },
  ];

  ngOnInit(): void {
    this.groupBy();
  }

  groupBy() {
    const source$ = from(this.people).pipe(
      groupBy(person => person.name),
      map(group => group.pipe(reduce((acc, curr) => ({
        name: curr.name,
        score: curr.score + acc.score
      })))),
      mergeAll()
    );
    source$.subscribe(console.log);

    const result = interval(1000).pipe(
      take(6),
      map(x => Math.random()),
      //share()
    ); // side-effect，平常有可能是呼叫 API 或其他 side effect

    result.subscribe(x => console.log('A: ' + x));
    result.subscribe(x => console.log('B: ' + x));
  }
}
