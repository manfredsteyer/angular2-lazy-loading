import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.debug('wo gehen wir hin?', route);
        console.debug('wo kommen wir her?', state);


        if (Math.random() < 0.5) {
            // this.router.navigate(['/login']);
            // return false;
        }
        return true;
    }

}