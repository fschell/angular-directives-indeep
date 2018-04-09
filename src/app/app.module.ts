import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent, SurroundDirective, TemplateService, TemplateStorage, ThreeDirective} from './app.component';


@NgModule({
    declarations: [
        AppComponent,
        TemplateStorage,
        SurroundDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        TemplateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
