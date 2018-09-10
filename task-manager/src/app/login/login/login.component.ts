import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../../service/quote.service';
import { Quote } from '../../domain/quote.domain';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../redux/reducers';
import { LoadAction, LoadSuccessAction } from '../../redux/actions/quote.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  quote$: Observable<Quote>;
  user: any = {};
  initCounter = 5;

  constructor(
    private quoteService: QuoteService,
    private loginService: LoginService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private store$: Store<fromRoot.State>) { }

  ngOnInit() {
    this.quote$ = this.store$.pipe(select('quote'));
    this.store$.dispatch(new LoadAction(null));
    // this.loadQuote();
  }

  login() {
    this.loginService.login(this.user)
      .subscribe(x => {
        if (this.loginService.loggedIn()) {
          const returnUrl = this.activedRoute.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
      }
    );
  }

  loadQuote() {
    this.quoteService.getQuote().subscribe(res =>
      this.store$.dispatch(new LoadSuccessAction(res))
    );
  }
}
