import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TaskList, Task } from '../domain/task.domain';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient,
    @Inject('BASE_CONFIG') private config) { }

  getTasklistByProductId(productId: number): Observable<TaskList[]> {
    return this.http.get<TaskList[]>(`${this.config.host}/tasklists?productId=${productId}`);
  }

  addTasklist(tasklist: TaskList): Observable<TaskList> {
    return this.http.post<TaskList>(`${this.config.host}/tasklists`, tasklist);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.config.host}/tasks`, task);
  }
}
