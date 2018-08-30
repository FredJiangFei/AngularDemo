import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, take, flatMap } from 'rxjs/operators';
import { mydebug, mydebug2 } from '../utils/debug.util';
import { Product } from '../domain/product.domain';
import { User } from '../domain/user.domain';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
    @Inject('BASE_CONFIG') private config) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.config.host}/auth/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post<User>(`${this.config.host}/auth/login`, user);
  }

  getByName(userName: string): Observable<User> {
    return this.http.get<User>(`${this.config.host}/users?username=${userName}`)
      .pipe(
        take(1)
      );
  }
}
