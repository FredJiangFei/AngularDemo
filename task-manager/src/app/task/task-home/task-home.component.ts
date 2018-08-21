import { MoveTaskComponent } from './../move-task/move-task.component';
import { NewTaskComponent } from './../new-task/new-task.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Task, TaskList } from '../../domain/task.domain';
import { User } from '../../domain/user.domain';
import { slideToRight } from '../../animates/route.animate';
import { DragData } from '../../directive/drag-drop.service';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../service/task.service';

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
  assignedUser = new User('lily', 'lily');
  productId: number;

  taskLists = [];
  constructor(private dialogRef: MatDialog,
    private activedRoute: ActivatedRoute,
    private taskService: TaskService) {
    this.productId = parseInt(activedRoute.snapshot.params['id']);
  }

  ngOnInit() {
    this.taskService.getTasklistByProductId(this.productId).subscribe(x => this.taskLists = x);
  }

  openAddModal(taskList: TaskList) {
    let addTaskModal = this.dialogRef.open(NewTaskComponent, { data: { title: 'Create task' } });

    addTaskModal.afterClosed().subscribe((task:Task) => {
      task.taskListId = taskList.id;

    });
  }

  openEditModal(task) {
    this.dialogRef.open(NewTaskComponent, { data: { title: 'Edit task', task: task } });
  }

  moveTaskTo() {
    this.dialogRef.open(MoveTaskComponent, { data: { taskLists: this.taskLists } });
  }

  addDataToList(data: DragData, taskList: TaskList) {
    console.log(data.data);
  }

  openAddTaskListModal() {
    let addTaskListModal = this.dialogRef.open(NewTaskListComponent);
    addTaskListModal.afterClosed().subscribe((list: TaskList) => {
      list.productId = this.productId;
      this.taskService.addTasklist(list).subscribe(x => this.taskLists = [...this.taskLists, list]);
    })
  }
}
