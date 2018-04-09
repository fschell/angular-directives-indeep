import {Component, Directive, ElementRef, ViewContainerRef, TemplateRef, AfterViewInit} from '@angular/core';

@Directive({
    selector: '[three]'
})
export class ThreeDirective implements AfterViewInit {
    constructor(el: ElementRef,
                private view: ViewContainerRef,
                private template: TemplateRef<any>) {
        console.log(el.nativeElement);
    }

    ngAfterViewInit() {
        this.view.createEmbeddedView(this.template);
        this.view.createEmbeddedView(this.template);
        this.view.createEmbeddedView(this.template);
    }
}

@Component({
    selector: 'app-root',
    template: `
        <h1 *three>Hello, Angular</h1>
    `
})
export class AppComponent {
}