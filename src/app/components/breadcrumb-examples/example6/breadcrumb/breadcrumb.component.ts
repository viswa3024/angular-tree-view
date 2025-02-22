import { Component, ContentChildren, QueryList, Input } from '@angular/core';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  //@ContentChildren(BreadcrumbItemComponent) breadcrumbItems: QueryList<BreadcrumbItemComponent> | undefined;
  @Input() noTrailingSlash: boolean = false;
  @ContentChildren(BreadcrumbItemComponent) breadcrumbItems: QueryList<BreadcrumbItemComponent> = new QueryList<any>();

  constructor() { }
}
