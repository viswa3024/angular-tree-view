import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div *ngIf="active" class="tab-panel">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabComponent {
  @Input() id!: string; // Unique ID for the tab
  @Input() heading!: string; // Tab heading
  @Input() active = false; // Whether the tab is active
  @Input() tabindex: number = -1; // Tab index
  @Output() selected = new EventEmitter<void>(); // Emit when the tab is selected
}
