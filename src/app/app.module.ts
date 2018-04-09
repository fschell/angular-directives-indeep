import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent, TrackDirective, TrackingService} from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        TrackDirective
    ],
    providers: [
        TrackingService
    ],
    bootstrap: [AppComponent]

})
export class AppModule {}
