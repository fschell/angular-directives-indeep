import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent, FirstDirective, BasicComponent} from './app.component';

const imports = [BrowserModule];
const bootstrap = [AppComponent];
const declarations = [
    AppComponent,
    FirstDirective,
    BasicComponent
];

@NgModule({
    imports,
    declarations,
    bootstrap
})
export class AppModule {
}