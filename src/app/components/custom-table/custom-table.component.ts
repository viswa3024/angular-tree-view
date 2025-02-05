import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() rows: Array<Record<string, any>> = [];  // Accept any object structure for rows
  @Input() headers: string[] = [];  // Headers can be any string array

  constructor() {}

  ngOnInit(): void {
    // Any initialization logic if required
  }

  // Helper method to get keys dynamically from any row object
  objectKeys(row: Record<string, any>): string[] {
    return Object.keys(row);  // Just return the keys of the object
  }

  // Helper method to check if a value is an object
  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  // Method to stringify an object
  stringifyObject(value: any): string {
    return JSON.stringify(value);
  }
}
