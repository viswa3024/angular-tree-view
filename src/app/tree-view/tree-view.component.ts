import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent {
  @Input() data: any; // Data to be displayed
  @Input() depthLimit = 15; // Depth limit for the tree view
  expanded: boolean = true; // Default expansion state

  toggleExpand() {
    this.expanded = !this.expanded; // Toggle the expansion state
  }

  isObject(item: any): boolean {
    return typeof item === 'object' && !Array.isArray(item) && item !== null;
  }

  isArray(item: any): boolean {
    return Array.isArray(item);
  }

  isExpandable(item: any): boolean {
    return this.isObject(item) || this.isArray(item);
  }

  keys(item: any): string[] {
    return this.isObject(item) ? Object.keys(item) : [];
  }
}
