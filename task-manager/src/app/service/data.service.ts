import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class DataService {
  constructor(
    private url: string,
    private http: HttpClient,
    @Inject('BASE_CONFIG') private config) {

  }

  getAll<T>() {
    return this.http.get<T>(this.url);
  }

  add(post) {
    return this.http.post(this.url, (JSON.stringify(post)));
  }

  update(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(post));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
