import { AbstractControl } from '@angular/forms';

export class OrtValidator {

    static validateWithParams(orte: string[]): any {

        return function(c: AbstractControl): any {

            if (orte.indexOf(c.value) > -1) {
                return {};
            }

            return {
                ort: {
                    actual: c.value
                }
            }

        }

    }

    static validate(c: AbstractControl ): any {

        if (c.value == 'Graz'
            || c.value == 'Hamburg'
            || c.value == 'Frankfurt'
            || c.value == 'Wien'
            || c.value == 'Mallorca') {

            return {};
        }

        return {
            ort: {
                actual: c.value
            }
        }

    }

}
