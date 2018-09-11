import { ActivatedRoute, Router } from '@angular/router';
import { Quote } from '../../domain/quote.domain';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadAction } from '../../redux/actions/quote.actions';

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
    private loginService: LoginService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private store$: Store<any>) { }

  ngOnInit() {
    this.quote$ = this.store$.pipe(select('quote'));
    this.store$.dispatch(new LoadAction(null));
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
}
