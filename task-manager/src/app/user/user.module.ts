import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ShareModule } from '../share/share.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    ShareModule,
    UserRoutingModule
  ],
  declarations: [UserListComponent, UserDetailComponent]
})
export class UserModule { }
