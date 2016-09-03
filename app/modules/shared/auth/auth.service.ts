import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    isLoggedIn: boolean = false;
    userName: string = null;
    city: string = "Wien";

    login() {
        this.isLoggedIn = true;
        this.userName = "Max";
        this.city = "Graz";
    }

    logout() {
        this.isLoggedIn = false;
        this.userName = null;
        this.city = "Wien";
    }
}