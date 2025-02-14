import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-switcher',
  templateUrl: './content-switcher.component.html',
  styleUrls: ['./content-switcher.component.scss']
})
export class ContentSwitcherComponent {
  @Input() options: string[] = [];  // List of button labels
  @Input() activeIndex: number = 0; // Default active button index
  @Output() selected = new EventEmitter<number>(); // Event emitter for selection changes

  onSelect(index: number) {
    this.activeIndex = index;
    this.selected.emit(index);
  }
}
