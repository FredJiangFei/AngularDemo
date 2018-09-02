import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGurd } from '../share/guard/auth.guard';

const routes: Routes = [
    { path: 'users', component: UserListComponent, canActivate: [AuthGurd]  }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
