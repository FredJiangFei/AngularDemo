import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { mydebug, mydebug2 } from '../utils/debug.util';

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient,
    @Inject('BASE_CONFIG') private config) { }

  getQuote(): Observable<any> {
    const id = Math.floor(Math.random() * 7) + 1;
    return this.http.get(`${this.config.host}/quotes/${id}`).pipe(
      // mydebug2('ww'),
      map((res: Response) => res)
    );
  }
}
