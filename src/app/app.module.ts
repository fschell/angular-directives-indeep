import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent, ThreeDirective } from './app.component'

const imports = [BrowserModule]
const bootstrap = [AppComponent]
const declarations = [
    AppComponent,
    ThreeDirective
]

@NgModule({
    imports,
    declarations,
    bootstrap
})
export class AppModule {}