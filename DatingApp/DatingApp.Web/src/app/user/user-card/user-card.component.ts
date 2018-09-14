import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../domain/user.domain';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';
import { MatDialog } from '@angular/material';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  constructor(
    private userServie: UserService,
    private loginService: LoginService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  likeUser(e: Event, user: User) {
    e.stopPropagation();
    this.userServie.sendLike(this.loginService.decodedToken.nameid, user.id)
    .subscribe(data => console.log('you have liked' + this.user.knownAs));
  }

  showMessageModal(e: Event, user: User) {
    e.stopPropagation();
    const messageDialog = this.dialog.open(MessageModalComponent, {
      data: {
        user: user
      }
    });

    messageDialog.afterClosed().subscribe(console.log);
  }
}
