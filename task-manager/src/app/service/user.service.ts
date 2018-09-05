import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../domain/user.domain';
import { environment } from '../../environments/environment';
import { PaginatedResult } from '../domain/pagination';
import { map } from 'rxjs/operators';
import { Message } from '../domain/message';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  register(user: any): Observable<User> {
    return this.http.post<User>(`${environment.baseUrl}/auth/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post<User>(`${environment.baseUrl}/auth/login`, user);
  }

  getUsers(page?, itemsPerPage?, userParams?, likesParam?): Observable<PaginatedResult<User[]>> {
    const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (userParams != null) {
      params = params.append('minAge', userParams.minAge);
      params = params.append('maxAge', userParams.maxAge);
      params = params.append('gender', userParams.gender);
      params = params.append('orderBy', userParams.orderBy);
    }

    if (likesParam === 'Likers') {
      params = params.append('Likers', 'true');
    }

    if (likesParam === 'Likees') {
      params = params.append('Likees', 'true');
    }

    return this.http.get<User[]>(`${environment.baseUrl}/users`, { observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.result = response.body;

        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
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

  sendLike(id: number, recipientId: number) {
    return this.http.post(`${environment.baseUrl}/users/${id}/like/${recipientId}`, {});
  }

  getMessages(id: number, page?, itemsPerPage?, messageContainer?) {
    const paginatedResult: PaginatedResult<Message[]> = new PaginatedResult<Message[]>();

    let params = new HttpParams();

    params = params.append('MessageContainer', messageContainer);

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http.get<Message[]>(environment.baseUrl + '/users/' + id + '/messages', {observe: 'response', params})
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') !== null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }

          return paginatedResult;
        })
      );
  }

  getMessageThread(id: number, recipientId: number) {
    return this.http.get<Message[]>(environment.baseUrl + '/users/' + id + '/messages/thread/' + recipientId);
  }

  sendMessage(id: number, message: Message) {
    return this.http.post(environment.baseUrl + '/users/' + id + '/messages', message);
  }

  deleteMessage(id: number, userId: number) {
    return this.http.post(environment.baseUrl + '/users/' + userId + '/messages/' + id, {});
  }

  markAsRead(userId: number, messageId: number) {
    this.http.post(environment.baseUrl + '/users/' + userId + '/messages/' + messageId + '/read', {})
      .subscribe();
  }
}
