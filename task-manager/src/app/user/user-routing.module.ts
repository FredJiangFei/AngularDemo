import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGurd } from '../share/guard/auth.guard';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MemberDetailResolver } from '../share/resolvers/member-detail.resolver';

const routes: Routes = [
    { path: 'users',
      component: UserListComponent,
      canActivate: [AuthGurd]
    },
    {
        path: 'users/:id',
        component: UserDetailComponent,
        canActivate: [AuthGurd],
        resolve: {
            user: MemberDetailResolver
        }
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
