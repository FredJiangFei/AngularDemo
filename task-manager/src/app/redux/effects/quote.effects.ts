import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { QuoteActionTypes, LoadSuccessAction, LoadFailAction } from '../actions/quote.action';
import { QuoteService } from '../../service/quote.service';

@Injectable()
export class QuoteEffects {
  constructor(
    private actions$: Actions,
    private quoteService: QuoteService) {}

  @Effect()
  quote$: Observable<Action> = this.actions$
  .ofType(QuoteActionTypes.LOAD)
  .pipe(
    switchMap(_ => this.quoteService.getQuote().pipe(
      map(data => new LoadSuccessAction(data)),
      catchError(err => of(new LoadFailAction(JSON.stringify(err)))))
    )
  );
}
