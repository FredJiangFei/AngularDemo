import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Observable } from 'rxjs';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { LoginService } from '../../service/login.service';
import { UserService } from '../../service/user.service';
import { Role } from '../../domain/role.domain';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  roles: Observable<Role[]>;
  userRoles: string[] = [];
  @ViewChild('roleInput') roleInput: ElementRef;

  constructor(private adminService: AdminService,
              private userService: UserService,
              public authService: LoginService) { }

  ngOnInit() {
    this.loadRoles();
    this.userRoles = this.authService.currentUser.roles;
  }

  loadRoles() {
   this.roles = this.adminService.getRoles();
  }

  remove(role: string): void {
    const index = this.userRoles.indexOf(role);
    if (index >= 0) {
      this.userRoles.splice(index, 1);
    }
  }

  optionSelect (e: MatAutocompleteSelectedEvent) {
    this.roleInput.nativeElement.blur();
    this.roleInput.nativeElement.value = '';
    if (!this.userRoles.includes(e.option.value)) {
      this.userRoles.push(e.option.value);
    }
  }

  saveProfile () {
    this.userService.editRoles(this.authService.decodedToken.nameid, this.userRoles)
    .subscribe(console.log);
  }
}
