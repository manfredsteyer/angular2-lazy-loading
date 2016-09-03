import {FormGroupDirective} from "@angular/forms";
import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {FlugService} from "../services/flug.service";
import {Flug} from "../../../entities/flug";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
    selector: 'flug-suchen',
    template: require('./flug-suchen.component.html'),
    providers: [],
    styles: [require('./flug-suchen.component.css')]
})
export class FlugSuchenComponent {

    public von: string = "";
    public nach: string = "";
    public datum: string = (new Date()).toISOString();

    public selectedFlug: Flug;

    constructor(private flugService: FlugService, private authService: AuthService) {
        this.von = authService.city;
    }

    public get fluege() { // comp.fluege
        return this.flugService.fluege;
    }

    suchen() {

        return new Promise((resolve, reject) => {

            this
                .flugService
                .find(this.von, this.nach)
                .subscribe(
                    (fluege: Flug[]) => {
                        resolve(fluege);
                    },
                    (err) => {
                        console.error("Fehler beim Laden von Flügen!!");
                        console.error(err);
                        reject(err);
                    }
                );

        });

    }

    select(flug: Flug): void {
        this.selectedFlug = flug;
    }

}

