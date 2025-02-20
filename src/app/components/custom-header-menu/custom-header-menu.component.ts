import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-header-menu',
  template: `
    <div class="custom-header-menu">
      <span>{{ title }}</span>
      <div class="dropdown">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./custom-header-menu.component.scss']
})
export class CustomHeaderMenuComponent {
  @Input() title: string = '';
}
