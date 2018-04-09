import {Component, Directive, ElementRef, ViewContainerRef, TemplateRef, Input} from '@angular/core';

@Directive({
    selector: '[three]'
})
export class ThreeDirective {
    @Input() set threeFrom({one, two, three}) {
        this.view.clear();

        this.view.createEmbeddedView(this.template, {
            $implicit: one
        });
        this.view.createEmbeddedView(this.template, {
            $implicit: two
        });
        this.view.createEmbeddedView(this.template, {
            $implicit: three
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
        <h1 *three="let message from messages">{{message}}</h1>
    `
})
export class AppComponent {
    messages = {
        one: 'One is awesome',
        two: 'Two is better',
        three: 'Three is best!'
    };

    constructor() {
        setInterval(() => {
            this.messages = {
                one: 'One ' + Math.random().toString().slice(0, 3),
                two: 'Two ' + Math.random().toString().slice(0, 3),
                three: 'Three ' + Math.random().toString().slice(0, 3)
            };
        }, 1000);
    }
}

