import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlugBuchenComponent} from "./flug-buchen/flug-buchen.component";
import {FlugSuchenComponent} from "./flug-suchen/flug-suchen.component";
import {FlugSuchenReactiveComponent} from "./flug-suchen-reactive/flug-suchen.component";
import {PassagierSuchenComponent} from "./passagier-suchen/passagier.suchen.component";
import {FlugService} from "./services/flug.service";
import {FlugCardComponent} from "./flug-suchen/flug-card.component";
import {FlugEditComponent} from "./flug-edit/flug-edit.component";
import {RouterModule} from "@angular/router";
import {FlugRouterModule, FLUG_ROUTE_PROVIDERS} from "./flug.routes";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FlugRouterModule, SharedModule],
    declarations: [FlugBuchenComponent, FlugCardComponent, FlugSuchenComponent, FlugSuchenReactiveComponent, PassagierSuchenComponent, FlugEditComponent],
   // exports: [FlugBuchenComponent, FlugSuchenComponent, FlugSuchenReactiveComponent, PassagierSuchenComponent, FlugEditComponent],
    providers: [FlugService, FLUG_ROUTE_PROVIDERS]
})
export class FlugModule {
}



