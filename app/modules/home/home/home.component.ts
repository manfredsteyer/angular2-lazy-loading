import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {UnlessDirective} from "../../../structural-demo/unless";
import {REPEATER_DIRECTIVES} from "../../../structural-demo/repeater";
import {REPEATER2_DIRECTIVES} from "../../../structural-demo/repeater2";


@Component({
    selector: 'home',
    // directives: [UnlessDirective, REPEATER_DIRECTIVES, REPEATER2_DIRECTIVES],
    template: `
        <h1>{{info}}</h1>
        <!--
        <div>
        
            <p *myUnless="let p wit h hidden; let info=info; in:123">Info! x={{p.x}}, y={{p.y}}, z={{p.z}}, info={{info}}</p>
            <a (click)="toggle()">Toggle!</a>
        
        </div>
        -->
        
        <!--
        <div [repeater]="data">
            <div *even="let item = data of 'a'">even: {{ item }}</div>
            <div *odd="let item = data of 'b'">odd: {{ item }}</div>
        </div>
        -->
        
        <!--
        <div *repeater2="data">
        
            <div *repeater2Template="let item for even" #even >even: {{ item }}</div>
            <div  *repeater2Template="let item for odd" #odd>odd: {{ item }}</div>
            
            
        
        </div>
        -->
    `
})
export class HomeComponent {
    public info = "Willkommen!";

}