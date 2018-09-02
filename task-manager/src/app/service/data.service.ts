import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
  constructor(
    private url: string,
    private http: HttpClient) {

  }

  getAll<T>() {
    return this.http.get<T>(`${environment.baseUrl}${this.url}`);
  }

  add(post) {
    return this.http.post(`${environment.baseUrl}${this.url}`, (JSON.stringify(post)));
  }

  update(post) {
    return this.http.patch(`${environment.baseUrl}${this.url}`, JSON.stringify(post));
  }

  delete(id) {
    return this.http.delete(`${environment.baseUrl}${this.url}`);
  }
}
