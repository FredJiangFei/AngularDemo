import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    ShareModule,
    UserRoutingModule
  ],
  declarations: [UserListComponent]
})
export class UserModule { }
