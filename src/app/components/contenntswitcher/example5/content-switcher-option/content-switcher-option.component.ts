import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-content-switcher-option',
  template: `{{ label }}`, // Directly display the label
  styleUrls: ['./content-switcher-option.component.scss']
})
export class ContentSwitcherOptionComponent {
  @Input() label: string = ''; // Receive button text
  @Input() active: boolean = false;
  @HostBinding('class.active') get isActive() { return this.active; }
}
