import {AfterContentInit, Component, Directive, ViewChild, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[first]'
})
export class FirstDirective {

}

@Component({
    selector: 'basic',
    template: `
        <ng-template #foo>
            This is content inside a template
        </ng-template>
    `
})
export class BasicComponent implements AfterContentInit {
    @ViewChild('foo') template;

    constructor(private view: ViewContainerRef) {
    }

    ngAfterContentInit() {
        this.view.createEmbeddedView(this.template);
        this.view.createEmbeddedView(this.template);
        this.view.createEmbeddedView(this.template);
    }
}

@Component({
    selector: 'app-root',
    template: `
        <basic></basic>
    `
})
export class AppComponent {}
