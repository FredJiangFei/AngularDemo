import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListHeaderComponent } from './task-list-header/task-list-header.component';
import { ShareModule } from '../share/share.module';
import { TaskRoutingModule } from './task-routing.module';
import { TaskHomeComponent } from './task-home/task-home.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';

@NgModule({
  imports: [
    ShareModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskListHeaderComponent,
    TaskHomeComponent, NewTaskComponent,  NewTaskListComponent
  ],
  entryComponents: [NewTaskComponent, NewTaskListComponent]
})
export class TaskModule { }
