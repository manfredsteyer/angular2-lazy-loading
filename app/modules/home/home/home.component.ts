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
        
        <button type="button" class="btn btn-default" aria-label="Left Align">
  <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
</button>
        
    `
})
export class HomeComponent {
    public info = "Willkommen!!!!";

    public data = [10, 20, 30, 40, 50, 60];

    public hidden = false;

    constructor(http: Http) {
        http.get('https://stage-ddw-services-gsc.us-west-2.elasticbeanstalk.com/rest/pps/resources/partnerprofile?contactName=TEST')
            .map(r => r.json())
            .subscribe(data => {
                console.debug(data);
            });
    }

    public toggle() {
        this.hidden = !this.hidden;
    }
}