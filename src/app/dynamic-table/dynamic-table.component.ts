import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];

  constructor() {}

  ngOnInit(): void {}


  calculateHeaderMinWidth(): number {
    // Calculate the total width needed for the header container
    return this.headers.length * 150; // Adjust the multiplier as needed
  }

  calculateBodyMinWidth(): number {
    // Calculate the total width needed for the body container
    const columnWidth = 150; // Assuming each cell width is 150px, adjust as needed
    const numColumns = this.headers.length;
    const numRows = this.data.length;
    return columnWidth * numColumns;
  }
  
}
