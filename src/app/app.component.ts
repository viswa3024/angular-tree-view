import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tree-view';
  jsonData = {
    a: { b: { c: { d: { e: { f: { g: { h: { i: { j: { k: { l: { m: { n: { o: 'Value at depth 15' } } } } } } } } } } } } },
    p: 'Another branch'
  }
}

tableHeaders: string[] = [
  'Name', 'Age', 'Email', 'Address', 'Phone', 'Company', 'Position',
  'Department', 'Salary', 'Hire Date', 'Manager', 'Status', 'Location',
  'Country', 'City'
];
tableData: any[] = [
  { Name: 'John Doe', Age: 28, Email: 'john@example.com', Address: '1234 Elm St', Phone: '555-5555', Company: 'ABC Corp', Position: 'Developer', Department: 'IT', Salary: '$80,000', 'Hire Date': '2015-08-12', Manager: 'Jane Smith', Status: 'Active', Location: 'HQ', Country: 'USA', City: 'New York' },
  { Name: 'Jane Smith', Age: 34, Email: 'jane@example.com', Address: '5678 Oak St', Phone: '555-1234', Company: 'XYZ Inc', Position: 'Manager', Department: 'HR', Salary: '$90,000', 'Hire Date': '2012-06-19', Manager: 'John Doe', Status: 'Active', Location: 'Branch', Country: 'USA', City: 'Los Angeles' },
  { Name: 'Mike Johnson', Age: 45, Email: 'mike@example.com', Address: '9101 Maple St', Phone: '555-6789', Company: 'Tech Solutions', Position: 'Analyst', Department: 'Finance', Salary: '$75,000', 'Hire Date': '2018-03-22', Manager: 'Jane Smith', Status: 'Inactive', Location: 'Remote', Country: 'Canada', City: 'Toronto' }
];
}
