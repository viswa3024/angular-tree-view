import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tree-view';
  jsonData: any;

jsonData_one = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] }
  ]
};

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


ngOnInit() {


//   {
//     "name": {
//         "value": "John",
//         "open": false
//     },
//     "age": {
//         "value": 30,
//         "open": false
//     },
//     "address": {
//         "value": {
//             "street": {
//                 "value": "123 Main St",
//                 "open": false
//             },
//             "city": {
//                 "value": "Anytown",
//                 "open": false
//             },
//             "country": {
//                 "value": "USA",
//                 "open": false
//             }
//         },
//         "open": false
//     },
//     "hobbies": {
//         "value": {
//             "0": {
//                 "value": "reading",
//                 "open": false
//             },
//             "1": {
//                 "value": "traveling",
//                 "open": false
//             }
//         },
//         "open": false
//     }
// }



// {
//     "key": "address",
//     "value": {
//         "value": {
//             "street": {
//                 "value": "123 Main St",
//                 "open": true
//             },
//             "city": {
//                 "value": "Anytown",
//                 "open": true
//             },
//             "country": {
//                 "value": "USA",
//                 "open": true
//             }
//         },
//         "open": true
//     },
//     "open": true
// }
  const rawJson = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    hobbies: ["reading", "traveling"]
  };

  //console.log("this.convertJsonToTree(rawJson): ", this.convertJsonToTree(rawJson))
  this.jsonData = this.convertJsonToTree(rawJson);
}

convertJsonToTree(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const tree: any = {};

  for (const key of Object.keys(obj)) {
    const value = obj[key];
    tree[key] = {
      value: this.convertJsonToTree(value),
      open: false
    };
  }

  return tree;
}
}
