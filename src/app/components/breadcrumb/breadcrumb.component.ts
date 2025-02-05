import { Component, ContentChildren, QueryList, Input, AfterContentInit, Output, EventEmitter  } from '@angular/core';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements AfterContentInit {
  @Input() noTrailingSlash: boolean = false;
  @ContentChildren(BreadcrumbItemComponent) breadcrumbItems!: QueryList<BreadcrumbItemComponent>;

  @Output() breadcrumbClick = new EventEmitter<string>(); // Emits click event to parent

  ngAfterContentInit() {
    // Ensure breadcrumb items are loaded
  }

  onBreadcrumbClick(label: string): void {
    console.log(`Breadcrumb clicked in breadcrumb.component.ts: ${label}`);
    this.breadcrumbClick.emit(label); // Pass event up to app.component.ts
  }
}