import { Component } from '@angular/core';

interface FilterCondition {
  field: string;
  operator: string;
  value: string | Date;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  conditions: FilterCondition[] = [{ field: '', operator: '', value: '' }];
  fields = ['Timestamp', 'Column'];
  operators = ['>', '<', '=', '>=', '<='];

  addCondition() {
    this.conditions.push({ field: '', operator: '', value: '' });
  }

  removeCondition(index: number) {
    this.conditions.splice(index, 1);
  }

  applyFilter() {
    // Here you can implement the logic to apply the filter to your data
    console.log(this.conditions);
  }
}
