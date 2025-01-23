import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'ibm-tab',
  template: '' // Empty template for content projection
})
export class IbmTabComponent {
  @Input() heading!: string; // Tab title
  @Input() active = false;   // Active state

  @ContentChild(TemplateRef) content!: TemplateRef<any>; // Content to display
}
