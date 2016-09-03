import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Flug} from "../../../entities/flug";

@Component({
    selector: 'flug-card',
    template: require('./flug-card.component.html')
})
export class FlugCardComponent {

    @Input('item') flug: Flug;
    @Input() selectedItem: Flug;
    @Output() selectedItemChange = new EventEmitter();

    select() {
        this.selectedItemChange.emit(this.flug);
    }
}