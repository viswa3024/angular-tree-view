import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div *ngIf="active" class="tab-panel">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabComponent {
  @Input() title!: string;
  @Input() active = false;
}
