import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent, TrackDirective, TrackingService, OnlineDirective, OnlineService} from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        TrackDirective,
        OnlineDirective
    ],
    providers: [
        TrackingService,
        OnlineService
    ],
    bootstrap: [AppComponent]

})
export class AppModule {}
