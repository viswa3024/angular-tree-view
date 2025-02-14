import { Component, ContentChildren, QueryList, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { ContentSwitcherOptionComponent } from '../content-switcher-option/content-switcher-option.component';


@Component({
  selector: 'app-content-switcher',
  templateUrl: './content-switcher.component.html',
  styleUrls: ['./content-switcher.component.scss']
})
export class ContentSwitcherComponent implements AfterContentInit {
  @ContentChildren(ContentSwitcherOptionComponent) options!: QueryList<ContentSwitcherOptionComponent>;
  @Output() selected = new EventEmitter<number>(); // Emit index of the selected option
  activeIndex: number = 0;

  ngAfterContentInit() {
    // Set default active button if specified
    const activeOption = this.options.toArray().findIndex(option => option.active);
    this.activeIndex = activeOption >= 0 ? activeOption : 0;
    this.updateActiveState();
  }

  selectOption(index: number) {
    this.activeIndex = index;
    this.selected.emit(index);
    this.updateActiveState();
  }

  private updateActiveState() {
    this.options.forEach((option, i) => {
      option.active = i === this.activeIndex;
    });
  }
}
