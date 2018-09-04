import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../domain/user.domain';
import { PageEvent } from '@angular/material';

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
  pagination = {};
  userParams: any = {};
  user: User = JSON.parse(localStorage.getItem('user'));
  genders = ['all', 'male', 'female'];

  ngOnInit() {
    this.userParams.gender = 'all';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.userParams.orderBy = 'lastActive';
    this.loadUsers();
  }

  pageChanged(event: any): void {
    this.pageNumber = event.page;
    this.loadUsers();
  }

  loadUsers() {
    this.userServie.getUsers(this.pageNumber, this.pageSize, this.userParams).subscribe(
      response => {
        this.users = response.result;
        this.pagination = response.pagination;
      }
    );
  }

  resetFilters() {
    this.userParams.gender = 'all';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.loadUsers();
  }

}
