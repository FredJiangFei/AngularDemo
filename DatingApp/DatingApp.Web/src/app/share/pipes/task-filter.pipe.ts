import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../domain/task.domain';

@Pipe({
  name: 'taskFilter',
  // pure: false
})
export class TaskFilterPipe implements PipeTransform {

  transform(allTasks: Task[], isChecked: boolean = false): any {
    if (!allTasks) {
        return undefined;
      }
    return allTasks.filter(t => !!t.checked === isChecked);
  }

}
