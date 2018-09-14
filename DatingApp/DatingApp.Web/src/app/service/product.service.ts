import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../domain/product.domain';
import { DataService } from './data.service';

@Injectable()
export class ProductService extends DataService<Product> {

  constructor(public http: HttpClient) {
      super('products', http);
    }
}
