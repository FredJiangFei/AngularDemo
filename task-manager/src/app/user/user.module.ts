import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ShareModule } from '../share/share.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { LikeListComponent } from './like-list/like-list.component';
import { MemberDetailResolver } from '../share/resolvers/member-detail.resolver';
import { ListsResolver } from '../share/resolvers/lists.resolver';
import { UserCardComponent } from './user-card/user-card.component';
import { MessagesResolver } from '../share/resolvers/messages.resolver';
import { MessagesComponent } from './messages/messages.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';

@NgModule({
  imports: [
    ShareModule,
    UserRoutingModule
  ],
  declarations: [
     UserListComponent,
     UserDetailComponent,
     PhotoEditorComponent,
     LikeListComponent,
     UserCardComponent,
     MessagesComponent,
     MessageModalComponent,
     UserMessagesComponent
    ],
  providers: [MemberDetailResolver, ListsResolver, MessagesResolver],
  entryComponents: [MessageModalComponent]
})
export class UserModule { }
