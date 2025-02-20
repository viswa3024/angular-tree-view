import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-header-item',
  template: `
    <a class="custom-header-item">{{ label }}</a>
  `,
  styleUrls: ['./custom-header-item.component.scss']
})
export class CustomHeaderItemComponent {
  @Input() label: string = '';
}
