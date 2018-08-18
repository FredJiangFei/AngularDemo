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

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    // this.quoteService.getQuote().subscribe(res => this.quote = res);
  }
}
