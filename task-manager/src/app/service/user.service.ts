import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take, flatMap } from 'rxjs/operators';
import { mydebug, mydebug2 } from '../utils/debug.util';
import { Product } from '../domain/product.domain';
import { User } from '../domain/user.domain';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  register(user: any): Observable<User> {
    return this.http.post<User>(`${environment.baseUrl}/auth/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post<User>(`${environment.baseUrl}/auth/login`, user);
  }

  getUsers(): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}/users`, httpOptions);
  }
}
