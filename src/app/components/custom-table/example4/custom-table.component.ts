import { Component, Input, OnInit } from '@angular/core';

interface TableData {
  id: number;
  results: any;
  is_expanded: boolean;
  evaluated: string;
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() rows: Array<TableData> = [];
  @Input() headers: string[] = [];

  constructor() {}

  ngOnInit(): void {
    // Any additional initialization can go here
  }
}
