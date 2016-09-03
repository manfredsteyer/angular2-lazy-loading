import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Component({
    template: require('./flug-edit.component.html')
})
export class FlugEditComponent {

    public id: string;

    constructor(route: ActivatedRoute) {
        route.params.subscribe( (p) => {
            this.id = p['id'];
        })
    }

    public exitWarning = {
        show: false,
        observer: null
    }

    decide(decision: boolean) {
        this.exitWarning.show = false;
        this.exitWarning.observer.next(decision);
        this.exitWarning.observer.complete();
    }

    canDeactivate() {
        this.exitWarning.show = true;
        return new Observable<boolean>((observer: Observer<boolean>) => {
            this.exitWarning.observer = observer;
        });
    }

}