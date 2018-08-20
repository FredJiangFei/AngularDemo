import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { mydebug, mydebug2 } from '../utils/debug.util';
import { Product } from '../domain/product.domain';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient,
  @Inject('BASE_CONFIG') private config) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.config.host}/products`);
  }

   add(product:Product): Observable<Product> {
    return this.http.post<Product>(`${this.config.host}/products`,product);
  }

  delete(productId:string) {
   return this.http.delete(`${this.config.host}/products/`+productId);
  }
}
