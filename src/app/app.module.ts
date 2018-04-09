import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent, BasicComponent, FirstDirective} from './app.component';


@NgModule({
    declarations: [
        AppComponent,
        FirstDirective,
        BasicComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
