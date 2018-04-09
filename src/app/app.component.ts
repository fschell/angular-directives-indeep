import {AfterViewInit, Component, Directive, Injectable, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Injectable()
export class TemplateService {
    templates = new Map<string, TemplateRef<any>>();

}

@Component({
    selector: 'template-storage',
    template: `
        <ng-template #header><h1>I am a header</h1></ng-template>
        <ng-template #footer><h2>I am a footer</h2></ng-template>
    `
})
export class TemplateStorage implements AfterViewInit {
    @ViewChild('header') headerTemplate;
    @ViewChild('footer') footerTemplate;

    constructor(private templateService: TemplateService) {}

    ngAfterViewInit() {
        this.templateService.templates.set('header', this.headerTemplate);
        this.templateService.templates.set('footer', this.footerTemplate);
    }
}

@Directive({
    selector: '[surround]'
})
export class SurroundDirective implements AfterViewInit{
    constructor(private templateService: TemplateService,
                private view: ViewContainerRef,
                private template: TemplateRef) {
    }
    ngAfterViewInit(){
        this.view.createEmbeddedView(this.templateService.templates.get('header'));
        this.view.createEmbeddedView(this.template);
        this.view.createEmbeddedView(this.templateService.templates.get('footer'));


    }
}

@Component({
    selector: 'app-root',
    template: `
        <template-storage></template-storage>
        <button>One</button>
        <button *surround>Two</button>
        <button>Three</button>
    `
})
export class AppComponent {

    constructor() {

    }

}
