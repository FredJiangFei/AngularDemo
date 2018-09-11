import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGurd } from '../share/guard/auth.guard';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MemberDetailResolver } from '../share/resolvers/member-detail.resolver';
import { UnsavedGuard } from '../share/guard/unsave.guard';
import { LikeListComponent } from './like-list/like-list.component';
import { ListsResolver } from '../share/resolvers/lists.resolver';
import { MessagesResolver } from '../share/resolvers/messages.resolver';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent,
        canActivate: [AuthGurd]
    },
    {
        path: 'likes',
        component: LikeListComponent,
        canActivate: [AuthGurd],
        resolve: {
            users: ListsResolver
        }
    },
    {
        path: 'messages',
        component: MessagesComponent,
        canActivate: [AuthGurd],
        resolve: {
            messages: MessagesResolver
        }
    },
    {
        path: 'users/:id',
        component: UserDetailComponent,
        canActivate: [AuthGurd],
        resolve: {
            user: MemberDetailResolver
        },
        canDeactivate: [UnsavedGuard]
    },
    { path: 'profile', component: ProfileComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
