import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 'Car'),
      new Product(2, 'Computer')
    ]
  }
}
