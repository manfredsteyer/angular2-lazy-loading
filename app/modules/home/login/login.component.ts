import { AuthService } from "../../shared/auth/auth.service";
import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `
        <div *ngIf="userName">
            <h1>Hallo, {{userName}}</h1> 
            <p>Sie sind angemeldet!</p>
            <a (click)="logout()" class="btn btn-default">Logout</a>
        </div>
        <div *ngIf="!userName">
            <h1>Login</h1>
            <p>Klicken Sie hier, um sich anmzumelden!</p>
            <a (click)="login()" class="btn btn-default">Login</a>
        </div>
    `
})
export class LoginComponent {

    constructor(private authService: AuthService) {
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }

    get userName() {
        return this.authService.userName;
    }

}