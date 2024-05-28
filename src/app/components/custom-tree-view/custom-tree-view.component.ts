import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tree-view',
  templateUrl: './custom-tree-view.component.html',
  styleUrls: ['./custom-tree-view.component.scss']
})
export class CustomTreeViewComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
