import { QuoteService } from './../../service/quote.service';
import { Quote } from './../../domain/quote.domain';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  quote: Quote;
  initCounter = 5;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    // this.quoteService.getQuote().subscribe(res => this.quote = res);
  }

  login(value: any) {
    console.log(value);
  }
}
