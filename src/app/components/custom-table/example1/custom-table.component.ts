import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() data: any[] = []; // Table rows
  @Input() headers: { key: string, label: string, sortable: boolean }[] = []; // Table headers

  sortedColumn: string | null = null;
  isAscending = true;

  ngOnInit() {}

  // Sort table data
  sortData(columnKey: string) {
    if (!this.headers.find(header => header.key === columnKey)?.sortable) return;

    this.isAscending = this.sortedColumn === columnKey ? !this.isAscending : true;
    this.sortedColumn = columnKey;

    this.data.sort((a, b) => {
      const valueA = a[columnKey];
      const valueB = b[columnKey];

      if (typeof valueA === 'string') {
        return this.isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else {
        return this.isAscending ? valueA - valueB : valueB - valueA;
      }
    });
  }
}
