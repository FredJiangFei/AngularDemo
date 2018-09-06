import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  @ViewChild('autocomplete') autocomplete: ElementRef;
  constructor() { }

  ngOnInit() {
    const autocomplete$ = fromEvent<any>(this.autocomplete.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        switchMap(x => this.getSuggestList(x.srcElement.value),
        (outerValue, innerValue, outerIndex: number, innerIndex: number) => innerValue[1])
      );
    autocomplete$.subscribe(console.log);
  }

  getSuggestList(keyword) {
    const url = 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*';
    return fetch(url + '&search=' + keyword, { method: 'GET', mode: 'cors' })
          .then(res => res.json());
  }
}
