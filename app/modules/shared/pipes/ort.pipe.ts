import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ort',
    pure: true
})
export class OrtPipe implements  PipeTransform{

    transform(value: any, ...args: any[]): any {

        let short, long, fmt;

        fmt = args[0]; // short, long

        switch(value) {
            case "Graz":
                short = "GRZ";
                long = "Flughafen Graz Thalerhof";
                break;
            case "Hamburg":
                short = "HAM";
                long = "Airport Hamburg Helmut Schmidt";
                break;
            default:
                short = long = "ROM";
        }

        if (fmt == 'short') return short;
        return long;

    }

}
