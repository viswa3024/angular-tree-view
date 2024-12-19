import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  private responseData = {
    menuDashboard: '',
    menuApplications: 'Applications',
    menuModels: 'Models',
    menuSettings: 'Settings',
    titleDashboard: 'Dashboard',
    titleApplications: 'Applications',
    titleModels: 'Models',
    titleSettings: 'Settings'
  };


  private initialFormData: any = {};
  isFormSubmitted = false;


  // Form data model
  //formData: any = { ...this.initialFormData };
  formData: any = {};

  constructor() {}

  ngOnInit() {
    this.fetchInitialFormData();

    // Detect clicks outside the form
    //document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  fetchInitialFormData() {
    // this.http.get('https://your-api-endpoint.com/get-initial-form-data').subscribe({
    //   next: (response: any) => {
    //     console.log('Fetched initial form data:', response);
    //     this.initialFormData = response; // Store initial API response
    //     this.formData = { ...this.initialFormData }; // Clone for editing
    //   },
    //   error: (error) => {
    //     console.error('Error fetching initial form data:', error);
    //     alert('Failed to load initial form data!');
    //   }
    // });

    console.log('Fetched initial form data:', this.responseData);
    this.initialFormData = this.responseData; // Store initial API response
    this.formData = { ...this.initialFormData }; // Clone for editing
  }

  // Update field when user types
  updateField(field: string,event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.formData[field] = inputElement.value;
  }

  // Cancel button handler
  onCancel() {
    console.log('Resetting form data...');
    this.formData = { ...this.initialFormData }; // Restore to initial state
    alert('Form data has been reset!');
  }

  // Save button handler (send data to API)
  // onSave() {
  //   console.log('Saving data...', this.formData);

  //   // Replace 'your-api-endpoint' with your backend endpoint
  //   // this.http.post('https://your-api-endpoint.com/save', this.formData).subscribe({
  //   //   next: (response) => {
  //   //     console.log('Data successfully saved:', response);
  //   //     alert('Data saved successfully!');
  //   //   },
  //   //   error: (error) => {
  //   //     console.error('Error saving data:', error);
  //   //     alert('Failed to save data!');
  //   //   }
  //   // });
  // }

  onSave() {
    this.isFormSubmitted = true;

    if (this.isFormValid()) {
      console.log('Saving data...', this.formData);
      alert('Data saved successfully!');
      // Call your save API here
    } else {
      alert('Please fill in all required fields.');
    }
  }

  isFormValid(): boolean {
    return (
      this.formData.menuDashboard &&
      this.formData.menuApplications &&
      this.formData.menuModels &&
      this.formData.menuSettings &&
      this.formData.titleDashboard &&
      this.formData.titleApplications &&
      this.formData.titleModels &&
      this.formData.titleSettings
    );
  }

   // Handle clicks outside the form
   handleOutsideClick(event: MouseEvent) {
    const formElement = document.querySelector('.form-container');
    if (formElement && !formElement.contains(event.target as Node)) {
      console.log('Clicked outside the form.');
      this.validateOnExit();
    }
  }

   // Validate form on exit
   validateOnExit() {
    if (!this.isFormValid()) {
      alert('Please complete the form before exiting.');
    }
  }
}
