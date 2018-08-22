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
import { DelModalComponent } from '../../share/del-modal/del-modal.component';

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
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasklistByProductId(this.productId)
      // .pipe(
      //   map((taskList:TaskList)=> taskList)//this.taskService.getTasksByListId(taskList.id))
      // )
      .subscribe(x => this.taskLists = x);
  }

  openAddModal(taskList: TaskList) {
    let addTaskModal = this.dialogRef.open(NewTaskComponent, { data: { title: 'Create task' } });

    addTaskModal.afterClosed().subscribe((task: Task) => {
      task.taskListId = taskList.id;
      this.taskService.addTask(task).subscribe(x => console.log(x));
    });
  }

  openEditModal(task) {
    this.dialogRef.open(NewTaskComponent, { data: { title: 'Edit task', task: task } });
  }

  addDataToList(data: DragData, taskList: TaskList) {
    console.log(data.data);
  }

  openAddTaskListModal() {
    let addTaskListModal = this.dialogRef.open(NewTaskListComponent, { data: { title: 'Create task list' } });
    addTaskListModal.afterClosed().subscribe((list: TaskList) => {
      list.productId = this.productId;
      this.taskService.addTasklist(list).subscribe(x => this.taskLists = [...this.taskLists, list]);
    })
  }

  openEditTaskListModal(taskList: TaskList) {
    let addTaskListModal = this.dialogRef.open(NewTaskListComponent, { data: { title: 'Edit task list', taskList: taskList } });

    addTaskListModal.afterClosed().subscribe((list: TaskList) => {
      this.taskService.editTasklist(list).subscribe(x =>  this.loadTasks());
    })
  }

  openDeleteTaskListModal(taskListId: number) {
    const deleteTaskListModal = this.dialogRef.open(DelModalComponent);
    deleteTaskListModal.afterClosed().subscribe(res => {
      if (res) {
        this.taskService.delTasklist(taskListId).subscribe(x =>  this.loadTasks());
      }
    });
  }
}
