import { Directive, Attribute, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {OrtValidator} from "./ort.validator";
import {OrtAsyncValidator} from "./ort.async.validator";

@Directive({
    selector: 'input[ortAsync]', // <input ... ort="Graz,Hamburg" ...>
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => OrtAsyncValidatorDirective),
            multi: true
        }
    ]
})
export class OrtAsyncValidatorDirective {


    public validate(c: AbstractControl): any {

        return OrtAsyncValidator.validate(c);

    }

}