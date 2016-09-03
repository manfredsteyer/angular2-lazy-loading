
import {Directive, TemplateRef, ViewContainerRef, Input, ContentChildren, ContentChild, Host} from "@angular/core";




@Directive({ selector: '[repeater]' })
export class RepeaterDirective {

    constructor(
        private viewContainer: ViewContainerRef
    ) { }

    private data: any[];

    @Input() set repeater(data: any[]) {
        console.debug('myRepeater');
        this.data = data;
        this.run();
    }

    even: TemplateRef<any>;
    odd: TemplateRef<any>;

    run() {
        console.debug('run')
        this.viewContainer.clear();

        for(let i=0; i<this.data.length; i++) {

            let templateRef = ( (i+1) % 2 == 1) ? this.odd : this.even;
            let context = {
                index: i,
                $implicit: this.data[i],
                data: this.data[i]
            };

            this.viewContainer.createEmbeddedView(templateRef, context);
        }

    }

    /*
    @Input() set myUnlessWith(condition: boolean) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef, { info: 'Hallo', $implicit: { x: 9, y: 2, z: 3 }} );
            this.viewContainer.createEmbeddedView(this.templateRef, { info: 'Welt!', $implicit: { x: 19, y: 12, z: 13 }} );
        } else {
            this.viewContainer.clear();
        }
    }
    */
}


@Directive({ selector: '[even]' })
export class EvenDirective {
    constructor(templateRef: TemplateRef<any>, @Host() repeater: RepeaterDirective) {
        console.debug('even');
        repeater.even = templateRef;
    }
    @Input() set evenOf(data: any[]) {
        console.debug('event of', data);
    }

}

@Directive({ selector: '[odd]' })
export class OddDirective {
    constructor(templateRef: TemplateRef<any>, @Host() repeater: RepeaterDirective) {
        console.debug('odd');
        repeater.odd = templateRef;
    }

    @Input() set oddOf(data: any[]) {
        console.debug('odd of', data);
    }

}

export const REPEATER_DIRECTIVES = [
    RepeaterDirective, EvenDirective, OddDirective
];
