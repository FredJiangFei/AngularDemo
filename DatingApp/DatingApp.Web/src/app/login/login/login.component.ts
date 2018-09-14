import { PopupComponent } from './../../share/popup/popup.component';
import { createCustomElement } from '@angular/elements';
import { Quote } from '../../domain/quote.domain';
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadAction } from '../../redux/actions/quote.actions';
import { LoginAction } from '../../redux/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //  encapsulation: ViewEncapsulation.Emulated
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  quote$: Observable<Quote>;
  user: any = {};
  initCounter = 5;

  constructor(private store$: Store<any>) {
  }

  ngOnInit() {
    this.quote$ = this.store$.pipe(select('quote'));
    this.store$.dispatch(new LoadAction(null));
  }

  login() {
    this.store$.dispatch(new LoginAction(this.user));
  }
}
