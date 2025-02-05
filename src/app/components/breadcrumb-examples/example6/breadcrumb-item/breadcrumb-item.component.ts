import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {
  @Input() label: string = '';
  @Input() href: string = '#';
  @Output() itemClick = new EventEmitter<string>();

  onClick(event: Event): void {
    event.preventDefault(); // Prevents page reload
    this.itemClick.emit(this.label);
  }
}
