import { Directive, Attribute, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import {OrtValidator} from "./ort.validator";

@Directive({
    selector: 'input[ort]', // <input ... ort="Graz,Hamburg" ...>
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => OrtValidatorDirective),
            multi: true
        }
    ]
})
export class OrtValidatorDirective implements Validator{

    validator;

    constructor(@Attribute('ort') ort: string) {
        var orte = ort.split(',');
        this.validator = OrtValidator.validateWithParams(orte);
    }

    public validate(c: AbstractControl): any {

        return this.validator(c);

    }

}