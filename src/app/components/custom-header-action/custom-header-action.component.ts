import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-header-action',
  template: `
    <button class="custom-header-action">{{ title }}</button>
  `,
  styleUrls: ['./custom-header-action.component.scss']
})
export class CustomHeaderActionComponent {
  @Input() title: string = '';
}
