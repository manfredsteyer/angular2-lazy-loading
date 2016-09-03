import { Injectable} from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FlugEditComponent} from "./flug-edit.component";
import { Observable } from 'rxjs';

@Injectable()
export class FlugEditGuard implements CanDeactivate<FlugEditComponent> {

    canDeactivate(
        component: FlugEditComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        return component.canDeactivate();

    }

}