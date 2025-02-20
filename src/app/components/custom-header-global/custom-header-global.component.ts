import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-header-global',
  template: `
    <div class="custom-header-global">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./custom-header-global.component.scss']
})
export class CustomHeaderGlobalComponent {}
