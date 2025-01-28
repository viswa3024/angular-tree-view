import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {
  @Input() href: string = '#';  // The link for the breadcrumb item
  @Input() isCurrent: boolean = false;  // To mark if the item is the current page
  @Input() isActive: boolean = false;  // To apply active styles
  @Input() text: string = '';  // The label/text for the breadcrumb item
}
