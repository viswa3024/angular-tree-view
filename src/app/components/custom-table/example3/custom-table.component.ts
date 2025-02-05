import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() rows: any[] = [];
  @Input() headers: string[] = [];

  constructor() {}

  ngOnInit(): void {
    // Initialize any additional logic if needed
  }
}
