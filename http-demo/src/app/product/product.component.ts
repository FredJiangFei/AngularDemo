import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<Product>;
  id: string;

  constructor(private http: Http, private activedRoute: ActivatedRoute) {
    activedRoute.params.subscribe(param => this.id = param['id']);
  }

  ngOnInit() {
    let myheaders: Headers = new Headers();
    myheaders.append("Authorization", "Basci 123456");

    let url = this.id ? '/api/products/' + this.id : '/api/products';
    this.products = this.http.get(url, { headers: myheaders })
      .map(res => res.json());
  }
}
