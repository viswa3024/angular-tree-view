import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {
  @Input() href: string | null = null;
  @Input() isCurrent: boolean = false;
  @Input() isActive: boolean = false;
  @Input() text: string = '';
  @Output() itemClick = new EventEmitter<string>();  // Emit event with text

  onClick() {
    console.log(`Breadcrumb clicked: ${this.text}`); // Ensure logging in the component
    this.itemClick.emit(this.text);  // Emit text to parent component
  }
}
