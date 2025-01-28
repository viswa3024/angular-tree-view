import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {
  @Input() href: string = '#';
  @Input() isCurrent: boolean = false;  // To mark if the item is the current page
  @Input() isActive: boolean = false;  // To apply active styles
  @Input() text: string = '';          // Add this to pass the text for the breadcrumb
}
