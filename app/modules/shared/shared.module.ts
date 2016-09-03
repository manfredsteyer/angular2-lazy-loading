import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {OAuthService} from "angular2-oauth2/oauth-service";
import {LoginComponent} from "../home/login/login.component";
import {CommonModule} from "@angular/common";
import {AuthGuard} from "../flug/flug-buchen/auth.guard";
import {OrtValidatorDirective} from "./validators/ort.validator.directive";
import {OrtPipe} from "./pipes/ort.pipe";
import {DateComponent} from "./date/date.component";
import {OrtAsyncValidatorDirective} from "./validators/ort.async.validator.directive";
import {AuthService} from "./auth/auth.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        OrtValidatorDirective,
        OrtAsyncValidatorDirective,
        DateComponent,
        OrtPipe
    ],
    exports: [
        OrtValidatorDirective,
        OrtAsyncValidatorDirective,
        DateComponent,
        OrtPipe
    ],
    providers: []
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [AuthService, AuthGuard]
        }
    }

}
