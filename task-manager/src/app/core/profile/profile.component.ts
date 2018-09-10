import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Observable } from 'rxjs';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  roles: Observable<string[]>;
  userRoles: string[] = [];
  @ViewChild('roleInput') roleInput: ElementRef;

  constructor(private adminService: AdminService,
              public authService: LoginService) { }

  ngOnInit() {
    this.loadRoles();
    this.userRoles = this.authService.currentUser.roles;
  }

  loadRoles() {
   this.roles = this.adminService.getRoles();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (!this.userRoles.includes(value)) {
      this.userRoles.push(value);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(role: string): void {
    const index = this.userRoles.indexOf(role);
    if (index >= 0) {
      this.userRoles.splice(index, 1);
    }
  }

  optionSelect (e: MatAutocompleteSelectedEvent) {
    this.roleInput.nativeElement.blur();
    this.userRoles.push(e.option.value);
  }

  saveProfile () {
    this.adminService.editRoles(this.authService.decodedToken.nameid, this.userRoles)
    .subscribe(console.log);
  }
}
