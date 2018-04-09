import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <ng-template #foo let-whatever="message">
            <h1>{{whatever}}</h1>
        </ng-template>

        <div
                [ngTemplateOutlet]="foo"
                [ngTemplateOutletContext]="one"
        >
        </div>
        <div
                [ngTemplateOutlet]="foo"
                [ngTemplateOutletContext]="two"
        >
        </div>
        <div
                [ngTemplateOutlet]="foo"
                [ngTemplateOutletContext]="three"
        >
        </div>
    `
})
export class AppComponent {
    one = {message: 'Hello One'};
    two = {message: 'Hello Two'};
    three = {message: 'Hello Three'};

}