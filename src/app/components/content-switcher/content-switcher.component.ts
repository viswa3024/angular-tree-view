import { Component, Input, ContentChildren, QueryList, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { ContentSwitcherOptionComponent } from '../content-switcher-option/content-switcher-option.component';


@Component({
  selector: 'app-content-switcher',
  templateUrl: './content-switcher.component.html',
  styleUrls: ['./content-switcher.component.scss']
})
export class ContentSwitcherComponent implements AfterContentInit {
  @Input() borderRadius: number = 6;
  @Input() contentSwitcherBg: string = '#f4f4f4';
  @Input() selectedBg: string = '#0f62fe';
  @Input() buttonWidth: string = 'auto';
  @Input() buttonHeight: string = '40px';


  @ContentChildren(ContentSwitcherOptionComponent) options!: QueryList<ContentSwitcherOptionComponent>;
  @Output() selected = new EventEmitter<number>(); // Emit index of the selected option
  activeIndex: number = 0;

  ngAfterContentInit() {
    // Set default active button if specified
    // const activeOption = this.options.toArray().findIndex(option => option.active);
    // this.activeIndex = activeOption >= 0 ? activeOption : 0;
    // this.updateActiveState();

    const activeIndex = this.options.toArray().findIndex(option => option.active);
    this.selected.emit(activeIndex >= 0 ? activeIndex : 0);
  }

  selectOption(index: number) {
    // this.activeIndex = index;
    // this.selected.emit(index);
    // this.updateActiveState();

    this.options.forEach((option, i) => option.active = i === index);
    this.selected.emit(index);
  }

  private updateActiveState() {
    this.options.forEach((option, i) => {
      option.active = i === this.activeIndex;
    });
  }
}
