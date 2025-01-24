import { Component, ContentChildren, QueryList, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal'; // Default to horizontal
  @Output() selected = new EventEmitter<string>(); // Emit selected tab ID

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0 && this.tabs.first) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((t) => (t.active = false)); // Deactivate all tabs
    tab.active = true; // Activate the selected tab
    tab.tabindex = 0; // Set tabindex for the active tab
    this.tabs.forEach((t) => {
      if (t !== tab) {
        t.tabindex = -1; // Set inactive tabs' tabindex to -1
      }
    });
    this.selected.emit(tab.id); // Emit the selected tab ID
  }
}
