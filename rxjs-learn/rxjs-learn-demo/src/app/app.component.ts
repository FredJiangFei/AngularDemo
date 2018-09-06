import { Component, OnInit } from '@angular/core';
import { from, zip, interval } from 'rxjs';
import { groupBy, map, mergeAll, reduce } from 'rxjs/operators';

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
  }
}
