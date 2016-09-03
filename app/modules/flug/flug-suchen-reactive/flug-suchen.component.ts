

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Http, URLSearchParams, Headers } from '@angular/http';
import { Component} from '@angular/core';
import {FlugService} from "../services/flug.service";
import {FlugCardComponent} from "./flug-card.component";
import {OrtPipe} from "../../shared/pipes/ort.pipe";
import {Flug} from "../../../entities/flug";
import {OrtValidator} from "../../shared/validators/ort.validator";
import {OrtAsyncValidator} from "../../shared/validators/ort.async.validator";

@Component({
    selector: 'flug-suchen',
    template: require('./flug-suchen.component.html'),
    providers: [FlugService],
    styles: [require('./flug-suchen.component.css')]
})
export class FlugSuchenReactiveComponent {

    public filter: FormGroup;

    public fluege: Array<Flug> = [];
    public selectedFlug: Flug;

    public formDesc = [
        { name: 'von', label: 'Abflugort' },
        { name: 'nach', label: 'Zielort' }
    ];

    constructor(
        private flugService: FlugService,
        private fb: FormBuilder) {

        this.filter = this.fb.group({
            von: [
                    'Graz',
                    [
                        Validators.required,
                        Validators.maxLength(30),
                        Validators.minLength(3),
                        Validators.pattern('[a-zA-ZöäüÖÄÜß]+'),
                        // OrtValidator.validate,
                        OrtValidator.validateWithParams(['Graz', 'Hamburg', 'München', 'Mallorca', 'Frankfurt', 'Wien'])
                    ],
                    [
                        OrtAsyncValidator.validate
                    ]
                 ],
            nach: ['Hamburg']
        });

        //this.filter.controls['von'].value;
        //this.filter.controls['von'].valid;
        //this.filter.controls['von'].hasError('requred');

        this.filter.valueChanges.subscribe((value) => {
            console.debug(value);
        });

        this.filter.controls['von'].valueChanges.subscribe((value) => {
            console.debug(value);
        });


    }

    suchen(): void {

        let value = this.filter.value;

        this
            .flugService
            .find(value.von, value.nach)
            .subscribe(
                (fluege: Flug[]) => {
                    this.fluege = fluege;
                },
                (err) => {
                    console.error("Fehler beim Laden von Flügen!!");
                    console.error(err);
                }
            );
            /*
            .map(function(resp) {
                return resp.json();
            })
            */



    }

    select(flug: Flug): void {
        this.selectedFlug = flug;
    }

}


