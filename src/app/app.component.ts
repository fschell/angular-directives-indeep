import {Component, Directive, ElementRef, ViewContainerRef, TemplateRef, Input} from '@angular/core';

@Directive({
    selector: '[three]'
})
export class ThreeDirective {
    @Input() set three(value) {
        this.view.createEmbeddedView(this.template, {
            $implicit: 'Awesome'
        });
        this.view.createEmbeddedView(this.template, {
            $implicit: 'Amazing'
        });
        this.view.createEmbeddedView(this.template, {
            $implicit: 'Sweet'
        });
    }

    constructor(el: ElementRef,
                private view: ViewContainerRef,
                private template: TemplateRef<any>) {
        console.log(el.nativeElement);
    }
}

@Component({
    selector: 'app-root',
    template: `
        <h1 *three="let message">{{message}}</h1>
    `
})
export class AppComponent {
}
