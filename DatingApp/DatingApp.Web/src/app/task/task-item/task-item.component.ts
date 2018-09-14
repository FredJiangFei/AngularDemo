import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../domain/task.domain';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  editTask = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  openEditModal() {
    this.editTask.emit();
  }

  whenCheckTask(e: Event) {
    e.stopPropagation();
  }
}
