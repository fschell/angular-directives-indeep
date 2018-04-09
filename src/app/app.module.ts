import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent, TrackDirective, TrackingService} from './app.component';


@NgModule({
    declarations: [
        AppComponent,
        TrackDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [TrackingService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
