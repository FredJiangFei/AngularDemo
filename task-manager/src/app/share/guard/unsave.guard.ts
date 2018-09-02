import { CanDeactivate } from '@angular/router';
import { UserDetailComponent } from '../../user/user-detail/user-detail.component';
import { Injectable } from '../../../../node_modules/@angular/core';

@Injectable()
export class UnsavedGuard implements CanDeactivate<UserDetailComponent> {

    canDeactivate(component: UserDetailComponent) {
        if (component.editForm.dirty) {
           return confirm('Are you sure ?');
        }
        return true;
    }
}
