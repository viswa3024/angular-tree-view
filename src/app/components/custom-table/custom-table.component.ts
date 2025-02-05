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
}
