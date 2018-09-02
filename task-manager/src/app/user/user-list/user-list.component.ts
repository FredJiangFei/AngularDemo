import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../domain/user.domain';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userServie: UserService) { }
  users: Observable<User>;

  ngOnInit() {
    this.users = this.userServie.getUsers();
  }

}
