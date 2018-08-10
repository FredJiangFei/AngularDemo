import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<Product>;

  constructor(private http: Http) { }

  ngOnInit() {
    let myheaders: Headers = new Headers();
    myheaders.append("Authorization", "Basci 123456");

    this.products = this.http.get('/api/products', { headers: myheaders })
      .map(res => res.json());
  }

}
