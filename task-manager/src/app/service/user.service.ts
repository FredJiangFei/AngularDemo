import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../domain/user.domain';
import { environment } from '../../environments/environment';

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
    return this.http.get<User>(`${environment.baseUrl}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}/users/${id}`);
  }

  updateUser(currentUserId: number, user: any): Observable<User> {
    return this.http.put<User>(`${environment.baseUrl}/users/${currentUserId}`, user);
  }

  setMainPhoto(userId: number, id: number) {
    return this.http.post(`${environment.baseUrl}/users/${userId}/photos/${id}/setMain`, {});
  }

  deletePhoto(userId: number, id: number) {
    return this.http.delete(`${environment.baseUrl}/users/${userId}/photos/${id}`);
  }
}
