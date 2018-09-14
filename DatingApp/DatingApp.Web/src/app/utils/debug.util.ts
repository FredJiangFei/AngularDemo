import { environment } from '../../environments/environment.prod';
import { Observable, interval } from 'rxjs';
import { filter, map, take, toArray, tap } from 'rxjs/operators';
import { Quote } from '../domain/quote.domain';

export const mydebug = (message: string) => tap(
    next => console.log(message, next),
    error => console.error('ERROR>>', message, error),
    () => console.log('Completed - ')
);

export const mydebug2 = (message: string) => <T>(source: Observable<T>) =>
  source.pipe(
    tap(x => console.log(x))
    // map((x:Quote) => x.title = 'wo gar le'),
    // filter((x: Quote) => x.id > 1)
  );

export const takeEveryNth = (n: number) => <T>(source: Observable<T>) =>
    new Observable<T>(observer => {
        let count = 0;
        return source.subscribe({
            next(x) {
                if (count++ % n === 0) {
                    observer.next(x);
                }
            },
            error(err) { observer.error(err); },
            complete() { observer.complete(); }
        });
    });
