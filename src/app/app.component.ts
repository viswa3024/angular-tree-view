import { Component } from '@angular/core';


interface TableHeader {
  label: string;
  sortable?: boolean;
  direction?: 'asc' | 'desc';  // Ensure only 'asc' | 'desc' | undefined is allowed
}

interface TableData {
  id: number;
  results: any;
  is_expanded: boolean;
  evaluated: string;
  dataObject: any;  // Allows any type for dataObject (including objects)
}

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

isModalVisible = false;

selectedTab = 'test';

loading = false;

// Example 1 
// customTableHeaders = [
//   { key: 'name', label: 'Name', sortable: true },
//   { key: 'position', label: 'Position', sortable: true },
//   { key: 'office', label: 'Office', sortable: true },
//   { key: 'age', label: 'Age', sortable: true },
//   { key: 'startDate', label: 'Start Date', sortable: true },
//   { key: 'salary', label: 'Salary', sortable: true }
// ];

// customRableData = [
//   { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: '$320,800' },
//   { name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: '$170,750' }
// ];


customTableHeaders = [
  { item: 'ID', key: 'id', sortable: true },
  { item: 'Results', key: 'results', sortable: true },
  { item: 'Is Expanded', key: 'is_expanded', sortable: false },
  { item: 'Evaluated', key: 'evaluated', sortable: true }
];

customRableData = [
  { id: 1, results: 'Passed', is_expanded: true, evaluated: 'Yes' },
  { id: 2, results: 'Failed', is_expanded: false, evaluated: 'No' },
  { id: 3, results: 'Passed', is_expanded: true, evaluated: 'Yes' }
];


// headers = ['Name', 'Age', 'Occupation'];
//   rows = [
//     { name: 'John Doe', age: 28, occupation: 'Engineer' },
//     { name: 'Jane Smith', age: 34, occupation: 'Designer' },
//     { name: 'Sam Johnson', age: 22, occupation: 'Developer' },
//     { name: 'Alice Brown', age: 27, occupation: 'Manager' }
//   ];

// Example 3
// headers = ['Test data Header'];
// rows = [
//   ['John Doe', 28, 'Engineer'],  // Each row can have any number of cells.
//   ['Jane Smith', 34, 'Designer'],
//   ['Sam Johnson', 22, 'Developer'],
//   ['Alice Brown', 27, 'Manager']
// ];


headers = ['ID'];  // Custom headers
// rows: Array<TableData> = [
//   { id: 1, results: '{"data": "123456"}', is_expanded: true, evaluated: 'Yes' },
//   { id: 2, results: 'Failed', is_expanded: false, evaluated: 'No' },
//   { id: 3, results: 'Passed', is_expanded: true, evaluated: 'Yes' },
//   { id: 4, results: 'Pending', is_expanded: false, evaluated: 'No' }
// ];

rows: Array<TableData> = [
  { id: 1, results: '{"data": "123456"}', is_expanded: true, evaluated: 'Yes', dataObject: { data: 'test object' } },
  { id: 2, results: 'Failed', is_expanded: false, evaluated: 'No', dataObject: "test string" }
];


isModalOpen = false;
modalTitle = 'My Custom Modal';

currentStep: number = 2;

// steps: { label: string, status: 'completed' | 'current' | 'incomplete' | 'failed' | 'disabled' }[] = [
//   { label: 'Step 1', status: 'completed' },
//   { label: 'Step 2', status: 'current' },
//   { label: 'Step 3', status: 'incomplete' },
//   { label: 'Step 4', status: 'failed' },
//   { label: 'Step 5', status: 'disabled' }
// ];


steps: { label: string, status: 'completed' | 'current' | 'incomplete' | 'failed' | 'disabled' }[] = [
  { label: 'Step 1', status: 'completed' },  // Step 1 starts as completed
  { label: 'Step 2', status: 'current' },    // Step 2 starts as current
  { label: 'Step 3', status: 'incomplete' }, // Step 3 is incomplete
  { label: 'Step 4', status: 'incomplete' }, // Step 4 is incomplete
  { label: 'Step 5', status: 'incomplete' }  // Step 5 is incomplete
];


stepsData = [
  { text: 'Step 1', state: ['current'] },
  { text: 'Step 2', state: ['incomplete'] },
  { text: 'Step 3', state: ['incomplete'] }
];

isOpen: boolean = false;

isMenuOpen: boolean = false; // To track whether the menu is open or not

isToggled = false;


headerActions = [
  { label: 'Profile', onClick: () => this.openProfile() },
  { label: 'Logout', onClick: () => this.logout() }
];



totalPagesBkp = 235;
currentPage = 1;
numOfItemsToShow = 10;
isPaginationDisabled = false;

pageSize = 10;
testData = Array.from({ length: 2370 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

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

get totalPages(): number {
  return Math.ceil(this.testData.length / this.pageSize);
}


get paginatedData() {
  const start = (this.currentPage - 1) * this.pageSize;
  const end = start + this.pageSize;
  return this.testData.slice(start, end);
}


// Toggle modal visibility
customModalOpen(): void {
  this.isModalOpen = true;
}

closeModal(): void {
  this.isModalOpen = false;
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

openModal() {
  this.isModalVisible = true;
}


onTabSelect(tabId: string) {
  this.selectedTab = tabId;
  console.log('Selected Tab:', tabId);
}

toggleLoading() {
  this.loading = !this.loading;
}


homeClick() {
  console.log('Home clicked');
}

categoryClick() {
  console.log('Category clicked');
}

subcategoryClick() {
  console.log('Subcategory clicked1');
}




onItemClick() {
  console.log('Breadcrumb item clicked!');
}

onBreadcrumbClick(label: string): void {
  console.log(`${label} breadcrumb clicked!11111`);
  // Add your custom logic here (e.g., routing, state management, etc.)
}


// onStepSelected(index: number) {
//   this.currentStep = index;
//   console.log('Current Step:', index);
// }

selectStep(index: number) {
  if (this.steps[index].status !== 'disabled') {
    // Update the status of the current step to 'completed'
    this.steps[this.currentStep].status = 'completed';
    
    // Update the clicked step to 'current'
    this.steps[index].status = 'current';
    
    // Update current step index
    this.currentStep = index;
  }
}


// finishSteps() {
//   // Mark the last step as completed
//   this.steps[this.steps.length - 1].status = 'completed';
// }



onStepSelected(stepText: string) {
  if (this.isFinished) return;

  this.stepsData.forEach((step) => (step.state = ['incomplete']));
  const selectedStep = this.stepsData.find((step) => step.text === stepText);
  if (selectedStep) {
    selectedStep.state = ['current'];
    this.markPreviousStepsAsComplete(stepText);
  }
}

markPreviousStepsAsComplete(selectedStepText: string) {
  for (let step of this.stepsData) {
    if (step.text === selectedStepText) break;
    step.state = ['complete'];
  }
}

isFinished = false;

finishSteps() {
  this.isFinished = true;
  this.stepsData.forEach((step) => (step.state = ['complete']));
}


onTabChange(index: number) {
  console.log("Selected Tab Index:", index);
}

myCustomClickFunction() {
  console.log('Hamburger clicked!');
}


toggleSidebar(isOpen: boolean) {
  this.isOpen = isOpen; // Set isOpen based on the emitted value
}


toggleSidebarClick(event: any) {
  console.log("event: ", event)
}

onToggleChange(value: boolean): void {
  console.log('Toggle state changed:', value);
  this.isToggled = value;
}

toggleSideNav() {
  console.log("=============")
}


openProfile() {
  console.log('Profile clicked');
}

logout() {
  console.log('Logout clicked');
}


onPageChangeBkp(newPage: number) {
  console.log('Current Page:', newPage);
}


onPageChange(newPage: number) {
  console.log('New Page Selected:', newPage);
  this.currentPage = newPage;
}

togglePagination() {
  this.isPaginationDisabled = !this.isPaginationDisabled;
}

}
