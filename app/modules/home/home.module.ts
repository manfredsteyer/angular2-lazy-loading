import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InfoComponent} from "./info/info.component";
import {OrtPipe} from "../shared/pipes/ort.pipe";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login/login.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [HomeComponent, DashboardComponent, InfoComponent, LoginComponent],
    exports: [HomeComponent, DashboardComponent, InfoComponent, LoginComponent],
    providers: []
})
export class HomeModule {
}