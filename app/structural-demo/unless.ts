import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({ selector: '[myUnless]' })
export class UnlessDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    @Input() set myUnlessIn(value: string) {
        console.debug('in value', value);
    }

    @Input() set myUnlessWith(condition: boolean) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef, { info: 'Hallo', $implicit: { x: 9, y: 2, z: 3 }} );
            this.viewContainer.createEmbeddedView(this.templateRef, { info: 'Welt!', $implicit: { x: 19, y: 12, z: 13 }} );
        } else {
            this.viewContainer.clear();
        }
    }

}
