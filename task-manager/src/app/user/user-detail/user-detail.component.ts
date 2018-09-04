import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { User } from '../../domain/user.domain';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  @ViewChild('editForm') editForm: NgForm;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute,
  private userServie: UserService,
  private loginService: LoginService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  saveUser() {
    const currentUserId = this.loginService.decodedToken.nameid;
    this.userServie.updateUser(this.user.id, this.user).subscribe(x => this.editForm.reset(this.user));
  }
}
