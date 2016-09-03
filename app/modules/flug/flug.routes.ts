
import {FlugEditGuard} from "./flug-edit/flug-edit.guard";
import {FlugEditComponent} from "./flug-edit/flug-edit.component";
import {PassagierSuchenComponent} from "./passagier-suchen/passagier.suchen.component";
import {FlugSuchenReactiveComponent} from "./flug-suchen-reactive/flug-suchen.component";
import {FlugSuchenComponent} from "./flug-suchen/flug-suchen.component";
import {AuthGuard} from "./flug-buchen/auth.guard";
import {FlugBuchenComponent} from "./flug-buchen/flug-buchen.component";
import {RouterModule } from '@angular/router';

const FLUG_ROUTES =    [{
    path: '',
    component: FlugBuchenComponent,
    canActivate: [AuthGuard],
    data: {
        protected: true
    },
    children: [
        {
            path: 'flug-suchen', // flug-buchen/flug-suchen
            component: FlugSuchenComponent
        },
        {
            path: 'flug-suchen-reactive',
            component: FlugSuchenReactiveComponent
        },
        {
            path: 'passagier-suchen',
            component: PassagierSuchenComponent
        },
        {
            path: 'flug-edit/:id',
            component: FlugEditComponent,
            canDeactivate: [FlugEditGuard]
        }
    ]
}];

export const FLUG_ROUTE_PROVIDERS = [
    FlugEditGuard
];

export const FlugRouterModule = RouterModule.forChild(FLUG_ROUTES);