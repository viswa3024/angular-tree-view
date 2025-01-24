import { Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

  activeTabIndex = 0;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(0);
    }
  }

  selectTab(index: number) {
    this.tabs.toArray().forEach((tab, i) => (tab.active = i === index));
    this.activeTabIndex = index;
  }
}
