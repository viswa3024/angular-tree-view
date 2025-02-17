import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-switcher-option',
  template: ``,
  styleUrls: ['./content-switcher-option.component.scss']
})
export class ContentSwitcherOptionComponent {
  @Input() label!: string;
  @Input() active: boolean = false;
}
