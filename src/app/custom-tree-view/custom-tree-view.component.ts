import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tree-view',
  templateUrl: './custom-tree-view.component.html',
  styleUrls: ['./custom-tree-view.component.scss']
})
export class CustomTreeViewComponent implements OnInit {

  @Input() data: any;
  expandedNodes: { [key: string]: boolean } = {};
  
  constructor() { }

  ngOnInit(): void {
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  toggleNode(key: string): void {
    this.expandedNodes[key] = !this.expandedNodes[key];
  }

  isNodeExpanded(key: string): boolean {
    return !!this.expandedNodes[key];
  }
}
