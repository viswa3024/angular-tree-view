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
  fields = [
    'ID', 'Name', 'Timestamp', 'User ID', 'Session ID', 'Input Tokens', 
    'Output Tokens', 'Usage', 'Metadata', 'Scores', 'Latency (s)', 
    'Input Cost ($)', 'Output Cost ($)', 'Total Cost ($)', 
    'Version', 'Release', 'Level', 'Tags'
  ];

  operatorsMap: { [key: string]: string[] } = {
    'ID': ['=', 'contains', 'does not contain', 'starts with', 'ends with'],
    'Name': ['any of', 'none of'],
    'Timestamp': ['>', '<', '=', '>=', '<='],
    'User ID': ['=', 'contains', 'does not contain', 'starts with', 'ends with'],
    'Session ID': ['=', 'contains', 'does not contain', 'starts with', 'ends with'],
    'Input Tokens': ['>', '<', '=', '>', '<'],
    'Output Tokens': ['>', '<', '=', '>', '<'],
    'Usage': ['custom'],
    'Metadata': ['faithfulness', 'misogyny', 'answer_relevancy', 'controversiality', 'conciseness'],
    'Scores': ['>', '<', '=', '>', '<'],
    'Latency (s)': ['>', '<', '=', '>', '<'],
    'Input Cost ($)': ['>', '<', '=', '>', '<'],
    'Output Cost ($)': ['>', '<', '=', '>', '<'],
    'Total Cost ($)': ['>', '<', '=', '>', '<'],
    'Version': ['=', 'contains', 'does not contain', 'starts with', 'ends with'],
    'Release': ['=', 'contains', 'does not contain', 'starts with', 'ends with'],
    'Level': ['any of', 'none of'],
    'Tags': ['any of', 'none of', 'all of']
  };

  multiSelectOptions: { [key: string]: string[] } = {
    'Name': ['test one', 'test two', 'test three', 'test four', 'test five'],
    'Level': ['debug', 'default', 'warning', 'error'],
    'Tags': ['engineering', 'marks', 'test one']
  };

  getOperators(field: string): string[] {
    return this.operatorsMap[field] || [];
  }

  getInputType(condition: FilterCondition): string {
    if (condition.field === 'Timestamp') {
      return 'date';
    } else if (['Input Tokens', 'Output Tokens', 'Usage', 'Scores', 'Latency (s)', 'Input Cost ($)', 'Output Cost ($)', 'Total Cost ($)'].includes(condition.field)) {
      return 'number';
    } else if (['Name', 'Level', 'Tags'].includes(condition.field)) {
      return 'multi-select';
    } else {
      return 'text';
    }
  }

  addCondition() {
    this.conditions.push({ field: '', operator: '', value: '' });
  }

  removeCondition(index: number) {
    this.conditions.splice(index, 1);
  }

  applyFilter() {
    // Implement logic to apply the filter to your data
    console.log(this.conditions);
  }
}
