import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { AdminGurd } from '../share/guard/admin.guard';

const routes: Routes = [
    { path: 'roles', component: RolesComponent, canActivate: [AdminGurd] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
