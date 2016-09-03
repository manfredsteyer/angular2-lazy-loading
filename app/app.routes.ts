import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./modules/home/home/home.component";
import {InfoComponent} from "./modules/home/info/info.component";
import {DashboardComponent} from "./modules/home/dashboard/dashboard.component";
import {LoginComponent} from "./modules/home/login/login.component";


export const ROUTE_CONFIG: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'info',
        component: InfoComponent,
        outlet: 'aux'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        outlet: 'aux'
    },
    {
        path: 'flug-buchen',
        loadChildren: () => System.import('./modules/flug/flug.module').then(m => m.FlugModule)
        /*
        loadChildren: () => new Promise((resolve) => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./modules/flug/flug.module').FlugModule);
            })
        })
        */
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];


export const AppRoutesModule = RouterModule.forRoot(ROUTE_CONFIG);

