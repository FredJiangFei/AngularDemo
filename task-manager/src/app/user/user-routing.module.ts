import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        path: '',
        canActivate: [AuthGurd],
        children: [
            {
                path: '',
                component: UserListComponent,
            },
            {
                path: 'likes',
                component: LikeListComponent,
                resolve: {
                    users: ListsResolver
                },
            },
            {
                path: 'messages',
                component: MessagesComponent,
                resolve: {
                    messages: MessagesResolver
                }
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: ':id',
                component: UserDetailComponent,
                resolve: {
                    user: MemberDetailResolver
                },
                canDeactivate: [UnsavedGuard]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
