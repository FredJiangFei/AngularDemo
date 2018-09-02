import { NewProductComponent } from '../../product/new-product/new-product.component';
import { CanDeactivate } from '@angular/router';

export class UnsavedGuard implements CanDeactivate<NewProductComponent> {

    canDeactivate(component: NewProductComponent) {
        return window.confirm('not saved');
    }
}
