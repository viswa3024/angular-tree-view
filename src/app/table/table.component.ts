import { Component, OnInit } from '@angular/core';

interface Column {
  key: string;
  display: string;
}

interface RowData {
  [key: string]: any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: RowData[] = [
    { id: 1, name: 'Alice', age: 30, city: 'New York' },
    { id: 2, name: 'Bob', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Charlie', age: 35, city: 'Chicago' },
    // Add more data here
  ];

  columns: Column[] = [
    { key: 'id', display: 'ID' },
    { key: 'name', display: 'Name' },
    { key: 'age', display: 'Age' },
    { key: 'city', display: 'City' },
  ];

  sortConfig: { [key: string]: 'asc' | 'desc' | undefined } = {};
  sortedData: RowData[] = [];

  defaultSortColumn: string = 'id';
  defaultSortOrder: 'desc' = 'desc';

  constructor() {}

  ngOnInit() {
    this.sortedData = [...this.data];
    this.sortConfig[this.defaultSortColumn] = this.defaultSortOrder;
    this.applySort(this.defaultSortColumn, this.defaultSortOrder);
    this.sendSortToApi(this.defaultSortColumn, this.defaultSortOrder);
  }

  sortBy(key: string) {
    const currentSortOrder = this.sortConfig[key];
    const newSortOrder: 'asc' | 'desc' = currentSortOrder === 'asc' ? 'desc' : 'asc';
    this.sortConfig[key] = newSortOrder;

    this.applySort(key, newSortOrder);
    this.sendSortToApi(key, newSortOrder);

    // Reset other sort orders
    Object.keys(this.sortConfig).forEach(k => {
      if (k !== key) this.sortConfig[k] = undefined;
    });
  }

  applySort(key: string, order: 'asc' | 'desc') {
    this.sortedData.sort((a, b) => {
      if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

  sendSortToApi(sortColumn: string, sortOrder: 'asc' | 'desc') {
    console.log("sortColumn: ", sortColumn)
    console.log("sortOrder: ", sortOrder)
}
}