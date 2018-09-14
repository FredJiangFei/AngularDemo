import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Observable } from 'rxjs';
import { Role } from '../../domain/role.domain';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: Observable<Role[]>;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.roles = this.adminService.getRoles();
  }

}
