import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Observable } from 'rxjs';
import { Role } from '../../domain/role.domain';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  roles: Observable<string[]>;
  userRoles: string[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.loadRoles();
  }

  loadRoles() {
   this.roles = this.adminService.getRoles();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.userRoles.push(value);
    }

    if (input) {
      input.value = '';
    }

    console.log(this.userRoles);
  }

  remove(role: string): void {
    const index = this.userRoles.indexOf(role);
    if (index >= 0) {
      this.userRoles.splice(index, 1);
    }
  }

  optionSelect (e: MatAutocompleteSelectedEvent) {
    this.userRoles.push(e.option.value);
  }
}
