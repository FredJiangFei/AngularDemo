import { User } from './user.domain';

export class Task {
    public id: number;
    public taskListId: number;
    public title: string;
    public desc: string;
    public dueDate: Date;
    public assigned: User;
    public checked: boolean;
}

export class TaskList {
    public id: number;
    public status: string;
    public productId: number;
    public tasks: Task[];
}
