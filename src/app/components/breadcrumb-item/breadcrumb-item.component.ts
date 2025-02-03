import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {
  @Input() href?: string;  // Link for the breadcrumb item
  @Input() isCurrent: boolean = false;  // Flag to mark current item
  @Input() isActive: boolean = false;  // Flag to mark active item
  @Input() text: string = '';  // Text of the breadcrumb item
  @Input() isClickable: boolean = false;  // Flag to allow clicking
  @Output() itemClick = new EventEmitter<void>();  // Emit event on click

  // Handler for the click event
  onClick() {
    if (this.isClickable) {
      console.log(`Breadcrumb clicked: ${this.text}`);
      this.itemClick.emit();
    }
  }
}
