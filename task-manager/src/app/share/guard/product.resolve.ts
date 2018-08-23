import { Observable } from 'rxjs';
import { Product } from './../../domain/product.domain';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductResolve implements Resolve<Product> {
    constructor(private route: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Product | Observable<Product> | Promise<Product> {
        let id: number = route.params['id'];

        if (id == 1) {
            return null;
        }
        else {
            this.route.navigate(['/home']);
            return undefined;
        }
    }
}