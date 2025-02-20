import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-header-navigation',
  template: `
    <nav class="custom-header-navigation">
      <ng-content></ng-content>
    </nav>
  `,
  styleUrls: ['./custom-header-navigation.component.scss']
})
export class CustomHeaderNavigationComponent {}
