import Rx from 'rxjs/Rx'

const length = document.getElementById('length');
const width = document.getElementById('width');
const area = document.getElementById('area');

const length$ = Observable.fromEvent(length, 'keyup').pluck('target', 'value');
const width$ = Observable.fromEvent(width, 'keyup').pluck('target', 'value');
const area$ = Observable.combinLatest(length$, width$, (l, w) => l * w);
area$.subscribe(v => area.innerHTML(v));