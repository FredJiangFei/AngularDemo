import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ShareModule } from '../share/share.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';

@NgModule({
  imports: [
    ShareModule,
    UserRoutingModule
  ],
  declarations: [UserListComponent, UserDetailComponent, PhotoEditorComponent]
})
export class UserModule { }
