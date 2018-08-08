import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product

  @Output()
  addCart: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.product = new Product('iphone7', 5000);

    setInterval(() => {
      this.product.price = 5000 * Math.random()
    }, 1000);
  }

  add() {
    this.addCart.emit(new Product(this.product.name, this.product.price));
  }
}
