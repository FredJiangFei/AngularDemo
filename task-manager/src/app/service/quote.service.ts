import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { mydebug, mydebug2 } from '../utils/debug.util';

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient,
    @Inject('BASE_CONFIG') private config) { }

  getQuote(idx: number): Observable<any> {
    return this.http.get(`${this.config.host}/quotes/${idx}`).pipe(
      // mydebug2('ww'),
      map((res: Response) => res)
    );
  }
}
