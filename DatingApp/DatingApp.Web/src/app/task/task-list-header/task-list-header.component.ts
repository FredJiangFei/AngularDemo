import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskList } from '../../domain/task.domain';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.css']
})
export class TaskListHeaderComponent {

  @Input() taskList: TaskList;
  @Output() addTask = new EventEmitter<void>();
  @Output() edit = new EventEmitter<TaskList>();
  @Output() delete = new EventEmitter<number>();

  showAddTaskModal(){
    this.addTask.emit();
  }

  showEditListModal(){
    this.edit.emit(this.taskList);
  }

  showDeleteListModal(){
    this.delete.emit(this.taskList.id);
  }
}
