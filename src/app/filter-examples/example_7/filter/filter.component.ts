import { Component } from '@angular/core';

interface FilterCondition {
  field: string;
  operator: string;
  value: string | number | Date | string[];
  validation: { field: boolean; operator: boolean; value: boolean };
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  conditions: FilterCondition[] = [{ field: '', operator: '', value: '', validation: { field: true, operator: true, value: true } }];
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
    this.conditions.push({ field: '', operator: '', value: '', validation: { field: true, operator: true, value: true } });
  }

  removeCondition(index: number) {
    this.conditions.splice(index, 1);
  }

  applyFilter() {
    let allValid = true;
    this.conditions.forEach(condition => {
      condition.validation.field = !!condition.field;
      condition.validation.operator = !!condition.operator;
      condition.validation.value = !!condition.value;
      
      if (!condition.field || !condition.operator || !condition.value) {
        allValid = false;
      }
    });

    if (!allValid) {
      console.log('Please fill in all values');
    } else {
      const filterObjects = this.conditions.map(condition => {
        let dataType: string;
        if (condition.field === 'Timestamp') {
          dataType = 'date';
        } else if (['Input Tokens', 'Output Tokens', 'Usage', 'Scores', 'Latency (s)', 'Input Cost ($)', 'Output Cost ($)', 'Total Cost ($)'].includes(condition.field)) {
          dataType = 'number';
        } else {
          dataType = 'string';
        }
        
        return {
          columnName: condition.field,
          comparator: condition.operator,
          value: condition.value,
          dataType: dataType
        };
      });
      
      console.log(filterObjects);
      // Implement logic to apply the filter to your data
    }
  }
}
