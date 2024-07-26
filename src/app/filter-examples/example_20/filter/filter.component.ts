import { Component } from '@angular/core';

interface FilterCondition {
  field: string;
  operator: string;
  value: string | number | Date | string[];
  validation: { field: boolean; operator: boolean; value: boolean };
}

interface Option {
  id: number;
  content: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  conditions: FilterCondition[] = [{ field: '', operator: '', value: '', validation: { field: true, operator: true, value: true } }];
  submitted: boolean = false;
  groupedFilters: { [key: string]: string[] } = {};

  fields: Option[] = [
    { id: 0, content: 'ID' },
    { id: 1, content: 'Name' },
    { id: 2, content: 'Timestamp' },
    { id: 3, content: 'User ID' },
    { id: 4, content: 'Session ID' },
    { id: 5, content: 'Input Tokens' },
    { id: 6, content: 'Output Tokens' },
    { id: 7, content: 'Usage' },
    { id: 8, content: 'Metadata' },
    { id: 9, content: 'Scores' },
    { id: 10, content: 'Latency (s)' },
    { id: 11, content: 'Input Cost ($)' },
    { id: 12, content: 'Output Cost ($)' },
    { id: 13, content: 'Total Cost ($)' },
    { id: 14, content: 'Version' },
    { id: 15, content: 'Release' },
    { id: 16, content: 'Level' },
    { id: 17, content: 'Tags' }
  ];

  operatorsMap: { [key: string]: Option[] } = {
    'ID': [
      { id: 0, content: '=' },
      { id: 1, content: 'contains' },
      { id: 2, content: 'does not contain' },
      { id: 3, content: 'starts with' },
      { id: 4, content: 'ends with' }
    ],
    'Name': [
      { id: 0, content: 'any of' },
      { id: 1, content: 'none of' }
    ],
    'Timestamp': [
      { id: 0, content: '>' },
      { id: 1, content: '<' },
      { id: 2, content: '=' },
      { id: 3, content: '>=' },
      { id: 4, content: '<=' }
    ],
    'User ID': [
      { id: 0, content: '=' },
      { id: 1, content: 'contains' },
      { id: 2, content: 'does not contain' },
      { id: 3, content: 'starts with' },
      { id: 4, content: 'ends with' }
    ],
    'Session ID': [
      { id: 0, content: '=' },
      { id: 1, content: 'contains' },
      { id: 2, content: 'does not contain' },
      { id: 3, content: 'starts with' },
      { id: 4, content: 'ends with' }
    ],
    'Input Tokens': [
      { id: 0, content: '>' },
      { id: 1, content: '<' },
      { id: 2, content: '=' }
    ],
    'Output Tokens': [
      { id: 0, content: '>' },
      { id: 1, content: '<' },
      { id: 2, content: '=' }
    ],
    'Usage': [
      { id: 0, content: 'custom' }
    ],
    'Metadata': [
      { id: 0, content: 'faithfulness' },
      { id: 1, content: 'misogyny' },
      { id: 2, content: 'answer_relevancy' },
      { id: 3, content: 'controversiality' },
      { id: 4, content: 'conciseness' }
    ],
    'Scores': [
      { id: 0, content: '>' },
      { id: 1, content: '<' },
      { id: 2, content: '=' }
    ],
    'Latency (s)': [
      { id: 0, content: '>' },
      { id: 1, content: '<' },
      { id: 2, content: '=' }
    ],
    'Input Cost ($)': [
      { id: 0, content: '>' },
      { id: 1, content: '<' },
      { id: 2, content: '=' }
    ],
    'Output Cost ($)': [
      { id: 0, content: '>' },
      { id: 1, content: '<' },
      { id: 2, content: '=' }
    ],
    'Total Cost ($)': [
      { id: 0, content: '>' },
      { id: 1, content: '<' },
      { id: 2, content: '=' }
    ],
    'Version': [
      { id: 0, content: '=' },
      { id: 1, content: 'contains' },
      { id: 2, content: 'does not contain' },
      { id: 3, content: 'starts with' },
      { id: 4, content: 'ends with' }
    ],
    'Release': [
      { id: 0, content: '=' },
      { id: 1, content: 'contains' },
      { id: 2, content: 'does not contain' },
      { id: 3, content: 'starts with' },
      { id: 4, content: 'ends with' }
    ],
    'Level': [
      { id: 0, content: 'any of' },
      { id: 1, content: 'none of' }
    ],
    'Tags': [
      { id: 0, content: 'any of' },
      { id: 1, content: 'none of' },
      { id: 2, content: 'all of' }
    ]
  };

  multiSelectOptions: { [key: string]: string[] } = {
    'Name': ['test one', 'test two', 'test three', 'test four', 'test five'],
    'Level': ['debug', 'default', 'warning', 'error'],
    'Tags': ['engineering', 'marks', 'test one']
  };

  getOperators(field: string): Option[] {
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

  handleFieldChange(condition: FilterCondition) {
    condition.validation.field = !!condition.field;
  }

  handleOperatorChange(condition: FilterCondition) {
    condition.validation.operator = !!condition.operator;
  }

  handleValueChange(condition: FilterCondition) {
    condition.validation.value = !!condition.value;
  }

  addCondition() {
    this.conditions.push({ field: '', operator: '', value: '', validation: { field: true, operator: true, value: true } });
  }

  removeCondition(index: number) {
    this.conditions.splice(index, 1);
  }

  applyFilter() {
    this.submitted = true;

    // Filter out conditions with empty fields or invalid values
    this.conditions = this.conditions.filter(condition => 
      condition.field && condition.operator
    );

    // Reset the grouped filters object
    this.groupedFilters = {};

    // Group filters by field and collect operators
    this.conditions.forEach(condition => {
      if (!this.groupedFilters[condition.field]) {
        this.groupedFilters[condition.field] = [];
      }
      if (!this.groupedFilters[condition.field].includes(condition.operator)) {
        this.groupedFilters[condition.field].push(condition.operator);
      }
    });

    // Convert the grouped filters into a desired format
    const formattedFilters = Object.entries(this.groupedFilters).map(([field, operators]) => 
      `${field} : ${operators.join(', ')}`
    ).join(', ');

    console.log(formattedFilters);
    // Implement logic to apply the filter to your data
  }

  objectkeys(values: any) {
    return Object.keys(values)
  }
}
