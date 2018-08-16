import { Quote } from './../domain/quote.domain';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient,
    @Inject('BASE_CONFIG') private config) { }

  getQuote(): Observable<Quote> {
    return this.http.get<Quote>(`${this.config.host}/quotes/1`)//.map(res => res.json() as Quote);
  }
}
