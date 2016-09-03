
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {ROUTE_CONFIG, AppRoutesModule} from "./app.routes";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {FlugEditComponent} from "./modules/flug/flug-edit/flug-edit.component";
import {PassagierSuchenComponent} from "./modules/flug/passagier-suchen/passagier.suchen.component";
import {FlugSuchenComponent} from "./modules/flug/flug-suchen/flug-suchen.component";
import {FlugBuchenComponent} from "./modules/flug/flug-buchen/flug-buchen.component";
import {DashboardComponent} from "./modules/home/dashboard/dashboard.component";
import {InfoComponent} from "./modules/home/info/info.component";
import {LoginComponent} from "./modules/home/login/login.component";
import {HomeComponent} from "./modules/home/home/home.component";
import {FlugSuchenReactiveComponent} from "./modules/flug/flug-suchen-reactive/flug-suchen.component";
import {HomeModule} from "./modules/home/home.module";
import {SharedModule} from "./modules/shared/shared.module";
import {DateComponent} from "./modules/shared/date/date.component";
import {OrtAsyncValidatorDirective} from "./modules/shared/validators/ort.async.validator.directive";
import {OrtValidatorDirective} from "./modules/shared/validators/ort.validator.directive";
import {OrtPipe} from "./modules/shared/pipes/ort.pipe";

const APP_PROVIDERS = [
    { provide: "BASE_URL", useValue: "http://www.angular.at" }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutesModule,
        HomeModule,
        SharedModule.forRoot()
    ],
    providers: [
        APP_PROVIDERS
    ],
    bootstrap: [
        AppComponent 
    ]
})
export class AppModule { 
}