import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent {
  // Form data model
  formData: any = {
    menuDashboard: 'Dashboard',
    menuApplications: 'Applications',
    menuModels: 'Models',
    menuSettings: 'Settings',
    titleDashboard: 'Dashboard',
    titleApplications: 'Applications',
    titleModels: 'Models',
    titleSettings: 'Settings'
  };

  constructor() {}

  // Update field when user types
  updateField(field: string,event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.formData[field] = inputElement.value;
  }

  // Cancel button handler
  onCancel() {
    console.log('Form Canceled!');
    alert('Form canceled!');
  }

  // Save button handler (send data to API)
  onSave() {
    console.log('Saving data...', this.formData);

    // Replace 'your-api-endpoint' with your backend endpoint
    // this.http.post('https://your-api-endpoint.com/save', this.formData).subscribe({
    //   next: (response) => {
    //     console.log('Data successfully saved:', response);
    //     alert('Data saved successfully!');
    //   },
    //   error: (error) => {
    //     console.error('Error saving data:', error);
    //     alert('Failed to save data!');
    //   }
    // });
  }
}
