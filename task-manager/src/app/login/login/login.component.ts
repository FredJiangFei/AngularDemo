import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from './../../service/quote.service';
import { Quote } from './../../domain/quote.domain';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../domain/user.domain';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  quote: Quote;
  user: User = new User();
  initCounter = 5;

  constructor(private quoteService: QuoteService,
    private loginService: LoginService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.quoteService.getQuote().subscribe(res => this.quote = res);
    this.user.name = 'Fred';
    this.user.password = '123';
  }

  login() {
    this.loginService.login(this.user)
      .subscribe(x => {
        if (this.loginService.isLogin) {
          let returnUrl = this.activedRoute.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
      }
      );
  }
}
