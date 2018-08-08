import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  product: Product;
  sellClass = "redFont";
  isBig = true;
  isSpecial = true;
  isItalic = true;

  ngOnInit() {
    setInterval(() => {
      this.isSpecial = !this.isSpecial;
      this.isItalic = !this.isItalic;
    }, 1000);
  }

  addToCartHandler(product: Product) {
    this.product = product;
  }
}
