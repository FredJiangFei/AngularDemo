import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../domain/user.domain';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';
import { Message } from '../../domain/message';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent implements OnInit {
  user: User;
  content: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<MessageModalComponent>,
    private userService: UserService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.data.user;
  }

  send() {
    const message = {
      Content: this.content,
      RecipientId: this.user.id
    };
    this.userService.sendMessage(this.loginService.decodedToken.nameid, message)
    .subscribe(res =>  this.dialogRef.close());
  }
}
