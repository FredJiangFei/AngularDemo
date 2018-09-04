import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../domain/user.domain';
import { Observable } from '../../../../node_modules/rxjs';
import { PaginatedResult } from '../../domain/pagination';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userServie: UserService) { }
  users: User[];
  pageNumber = 1;
  pageSize = 5;

  ngOnInit() {
    this.userServie.getUsers(this.pageNumber, this.pageSize).subscribe(
      response => this.users = response.result
    );
  }
}
