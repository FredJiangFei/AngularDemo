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

  editTasklist(tasklist: TaskList): Observable<TaskList> {
    var command = {
      status: tasklist.status
    };
    return this.http.patch<TaskList>(`${this.config.host}/tasklists/${tasklist.id}`, command);
  }

  delTasklist(tasklistId: number): Observable<TaskList> {
    return this.http.delete<TaskList>(`${this.config.host}/tasklists/${tasklistId}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.config.host}/tasks`, task);
  }

  getTasksByListId(taskListId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.config.host}/tasks?taskListId=${taskListId}`);
  }
}
