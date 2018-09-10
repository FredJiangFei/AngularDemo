import { NotFoundComponent } from './share/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './core/profile/profile.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // {
    //     path: '',
    //     runGuardsAndResolvers: 'always',
    //     canActivate: [AuthGuard],
    //     children: [
    //         {path: 'members', component: MemberListComponent},
    //     ]
    // },
    { path: 'profile', component: ProfileComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
