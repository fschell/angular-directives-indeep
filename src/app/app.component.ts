import {Component, Directive, Input, HostListener, Injectable} from '@angular/core';

@Injectable()
export class TrackingService {
    logs = [];

    log(trackingEvent) {
        this.logs.push(trackingEvent);
        console.log(this.logs);
    }
}

@Directive({
    selector: '[track]'
})
export class TrackDirective {
    @Input() track;

    @HostListener('click')
    onClick() {
        this.tracking.log({event: 'click', message: this.track});
    }

    @HostListener('mouseover')
    onMouseover() {
        this.tracking.log({event: 'mouseover', message: this.track});
    }

    constructor(private tracking: TrackingService) {
    }
}

@Component({
    selector: 'app-root',
    template: `
        <button [track]="'One Button'">One</button>
        <button [track]="'Two Button'">Two</button>
        <button [track]="'Three Button'">Three</button>

        <!-- Only for visuals-->
        <div *ngFor="let log of tracking.logs">
            {{log.event}} - {{log.message}}
        </div>
    `
})
export class AppComponent {
    //only for visuals
    constructor(private tracking: TrackingService) {
    }
}