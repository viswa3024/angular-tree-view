import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { IbmTabComponent } from '../ibm-tab/ibm-tab.component';

@Component({
  selector: 'ibm-tabs',
  template: `
    <div class="tabs-header">
      <div 
        *ngFor="let tab of tabs; let i = index" 
        class="tab-title" 
        [class.active]="tab.active" 
        (click)="selectTab(i)">
        {{ tab.heading }}
      </div>
    </div>
    <div class="tabs-content">
      <ng-container *ngFor="let tab of tabs">
        <div class="tab-pane" [class.active]="tab.active">
          <ng-container *ngTemplateOutlet="tab.content"></ng-container>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .tabs-header {
        display: flex;
        border-bottom: 2px solid #ccc;
      }
      .tab-title {
        padding: 10px 20px;
        cursor: pointer;
        border: 1px solid transparent;
        border-bottom: none;
      }
      .tab-title.active {
        font-weight: bold;
        border: 1px solid #ccc;
        border-bottom: 2px solid white;
        background-color: #f9f9f9;
      }
      .tabs-content {
        padding: 10px;
        border: 1px solid #ccc;
      }
      .tab-pane {
        display: none;
      }
      .tab-pane.active {
        display: block;
      }
    `
  ]
})
export class IbmTabsComponent implements AfterContentInit {
  @ContentChildren(IbmTabComponent) tabs!: QueryList<IbmTabComponent>;

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
