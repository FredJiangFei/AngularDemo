import { QuoteService } from './../../service/quote.service';
import { Quote } from './../../domain/quote.domain';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../domain/user.domain';
import { UserService } from '../../service/user.service';

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

  constructor(private quoteService: QuoteService, private userService: UserService) { }

  ngOnInit() {
    this.quoteService.getQuote().subscribe(res => this.quote = res);
  }

  login() {
    this.userService.getByName(this.user.name).subscribe(x=>console.log(x.password == this.user.password));
  }
}
