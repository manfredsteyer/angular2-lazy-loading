import { Component  } from '@angular/core';

@Component({
    template: `
        <h2>{{info}}</h2>
    `
})
export class DashboardComponent {

    info = "Dashboard!";

}