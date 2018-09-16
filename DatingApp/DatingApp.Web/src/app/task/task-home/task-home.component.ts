import { NewTaskComponent } from '../new-task/new-task.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Task, TaskList } from '../../domain/task.domain';
import { User } from '../../domain/user.domain';
import { slideToRight } from '../../animates/route.animate';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { DelModalComponent } from '../../share/del-modal/del-modal.component';
import { map, flatMap, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css'],
  animations: [
    slideToRight
  ]
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;
  assignedUser = new User();
  productId: number;
  taskChecked = false;

  taskLists: TaskList[] = [];
  constructor(private dialogRef: MatDialog,
    private activedRoute: ActivatedRoute,
    private taskService: TaskService) {
    this.productId = parseInt(activedRoute.snapshot.params['id']);
  }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskLists = [];
    this.taskService.getTasklistByProductId(this.productId)
      .pipe(
        flatMap(list => list),
        map((taskList: TaskList) => {
          this.taskService.getTasksByListId(taskList.id).subscribe(x => taskList.tasks = x);
          return taskList;
        })
      )
      .subscribe(x => this.taskLists.push(x));
  }

  openAddModal(taskList: TaskList) {
    const addTaskModal = this.dialogRef.open(NewTaskComponent, { data: { title: 'Create task' } });

    addTaskModal.afterClosed().subscribe((task: Task) => {
      task.taskListId = taskList.id;
      this.taskService.addTask(task).subscribe(x => this.loadTasks());
    });
  }

  openEditModal(task) {
    this.dialogRef.open(NewTaskComponent, { data: { title: 'Edit task', task: task } });
  }

  addDataToList(task: Task, taskList: TaskList) {
    this.taskService.moveTask(task.id, taskList.id)
      .subscribe(x => this.loadTasks());
  }

  openAddTaskListModal() {
    const addTaskListModal = this.dialogRef.open(NewTaskListComponent, { data: { title: 'Create task list' } });
    addTaskListModal.afterClosed().subscribe((list: TaskList) => {
      list.productId = this.productId;
      this.taskService.addTasklist(list).subscribe(x => this.taskLists = [...this.taskLists, list]);
    });
  }

  openEditTaskListModal(taskList: TaskList) {
    const addTaskListModal = this.dialogRef.open(NewTaskListComponent, { data: { title: 'Edit task list', taskList: taskList } });

    addTaskListModal.afterClosed().subscribe((list: TaskList) => {
      this.taskService.editTasklist(list).subscribe(x => this.loadTasks());
    });
  }

  openDeleteTaskListModal(taskListId: number) {
    const deleteTaskListModal = this.dialogRef.open(DelModalComponent);
    deleteTaskListModal.afterClosed().subscribe(res => {
      if (res) {
        this.taskService.delTasklist(taskListId).subscribe(x => this.loadTasks());
      }
    });
  }
}
