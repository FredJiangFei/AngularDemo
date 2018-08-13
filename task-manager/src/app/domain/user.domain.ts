export class User {
    id?: string;
    email: string;
    password: string;

    constructor(public name: string, public avatar: string) {

    }
}