import {Directive, TemplateRef, ViewContainerRef, Input, ContentChildren, ContentChild, Host, AfterContentInit} from "@angular/core";

@Directive({ selector: '[repeater2]' })
export class Repeater2Directive implements  AfterContentInit {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    private data: any[];

    public odd: TemplateRef<any>;
    public even: TemplateRef<any>;


    @Input() set repeater2(data: any[]) {
        console.debug('repeater2');
        this.data = data;

        this.viewContainer.createEmbeddedView(this.templateRef);
        //this.run();

    }

    ngAfterContentInit() {
        console.debug('ngAfterContentInit');
        this.viewContainer.createEmbeddedView(this.templateRef);
        console.debug('odd', this.odd);
        console.debug('even', this.even);
    }

    ngAfterContentChecked() {
        console.debug('ngAfterContentChecked');
        console.debug('odd', this.odd);
        console.debug('even', this.even);

    }

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

            // this.viewContainer.createEmbeddedView(templateRef, context);
        }

    }

}


@Directive({ selector: '[repeater2Template]' })
export class Repeater2Template {
    constructor(private templateRef: TemplateRef<any>, @Host() private repeater2: Repeater2Directive) {
    }

    @Input() set repeater2TemplateFor(data: any) {
        console.debug('event of', data);
        if (data == 'even') {
            this.repeater2.even = this.templateRef;
        }
        else {
            this.repeater2.odd = this.templateRef;
        }
    }

}

export const REPEATER2_DIRECTIVES = [ Repeater2Directive, Repeater2Template];
