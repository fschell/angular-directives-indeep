import {Component, Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[first]'
})
export class FirstDirective {
    @Input() first;

    @HostBinding() get innerText() {
        return this.first;
    }
}

@Component({
    selector: 'basic',
    template: `
        <div></div>`
})
export class BasicComponent {
}

@Component({
    selector: 'app-root',
    template: `
        <basic [first]="'Something'"></basic>
        <basic [first]="'Another'"></basic>
        <basic [first]="'Third'"></basic>
    `
})
export class AppComponent {
}
