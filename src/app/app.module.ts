import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

const imports = [BrowserModule];
const bootstrap = [AppComponent];
const declarations = [
    AppComponent
];

@NgModule({
    imports,
    declarations,
    bootstrap
})
export class AppModule {}
