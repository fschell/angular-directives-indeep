import {NgModule,} from '@angular/core';
import {} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent, TrackDirective, TrackingService, OnlineDirective, OnlineService} from './app.component';

const imports = [BrowserModule];
const bootstrap = [AppComponent];
const declarations = [
    AppComponent,
    TrackDirective,
    OnlineDirective
];
const providers = [
    TrackingService,
    OnlineService
];

@NgModule({
    imports,
    declarations,
    bootstrap,
    providers
})
export class AppModule {
}