import { Component } from '@angular/core'

@Component({
    selector: 'flug-app',
    template: require('./app.component.html')
})
export class AppComponent {
    info = "FlugApp!!";
}