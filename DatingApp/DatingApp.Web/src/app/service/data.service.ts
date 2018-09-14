import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService<T> {
  constructor(
    public url: string,
    public http: HttpClient) {
  }

  getAll() {
    return this.http.get<T[]>(`${environment.jsonServerUrl}/${this.url}`);
  }

  add(post) {
    return this.http.post(`${environment.jsonServerUrl}/${this.url}`, post);
  }

  update(post) {
    return this.http.patch(`${environment.jsonServerUrl}/${this.url}/${post.id}`, post);
  }

  delete(id) {
    return this.http.delete(`${environment.jsonServerUrl}/${this.url}/${id}`);
  }
}
