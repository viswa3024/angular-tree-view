import { Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { IbmTabComponent } from '../ibm-tab/ibm-tab.component';

@Component({
  selector: 'ibm-tabs',
  templateUrl: './ibm-tabs.component.html',
  styleUrls: ['./ibm-tabs.component.scss']
})
export class IbmTabsComponent implements AfterContentInit {
  @ContentChildren(IbmTabComponent) tabs!: QueryList<IbmTabComponent>;

  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal'; // Default orientation

  ngAfterContentInit() {
    // Activate the first tab by default
    const activeTab = this.tabs.find((tab) => tab.active);
    if (!activeTab && this.tabs.first) {
      this.tabs.first.active = true;
    }
  }

  selectTab(index: number) {
    this.tabs.toArray().forEach((tab, i) => (tab.active = i === index));
  }
}
