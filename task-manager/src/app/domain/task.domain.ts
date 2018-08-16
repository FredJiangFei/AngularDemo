import { User } from "./user.domain";

export class Task {
    constructor(
        public id: number, 
        public title: string, 
        public desc: string, 
        public assigned: User) {

    }
}

export class TaskList {
    constructor(public tasks: Task[], public status: string) {

    }
}