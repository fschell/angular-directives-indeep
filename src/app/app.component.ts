import {Component, Directive, HostBinding} from '@angular/core';


@Directive({
    selector: 'h1'
})
export class FirstDirective {
  @HostBinding() innerText = 'I am a directive';

}

@Component({
  selector: 'app-root',
  template: '<h1>myApp</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
