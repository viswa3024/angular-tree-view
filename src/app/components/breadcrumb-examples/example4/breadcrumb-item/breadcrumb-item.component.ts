import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() isClickable: boolean = false;  // Flag to determine if it's clickable
  
  @Output() itemClick = new EventEmitter<string>();  // Emit event with breadcrumb text

  // When a breadcrumb item is clicked
  onClick() {
    console.log('Breadcrumb item clicked:', this.text);
    this.itemClick.emit(this.text);  // Emit the item text to the parent
  }
}
