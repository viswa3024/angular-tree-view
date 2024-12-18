import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http'; // Import HttpClient for API calls

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  uploadedFiles: File[] = [];

  constructor() {}

  // Handle file input
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      this.uploadedFiles.push(file);
    }
  }

  // Remove file from the list
  removeFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
  }

  // Determine file type for styling
  getFileType(name: string): string {
    if (name.endsWith('.pdf')) return 'Pdf';
    if (name.endsWith('.docx')) return 'Docx';
    if (/\.(jpg|jpeg|png|svg)$/.test(name)) return 'Image';
    return 'File';
  }

  // Add class for file-type-specific styling
  getFileTypeClass(name: string): string {
    if (name.endsWith('.pdf')) return 'file-tag pdf';
    if (name.endsWith('.docx')) return 'file-tag docx';
    if (/\.(jpg|jpeg|png|svg)$/.test(name)) return 'file-tag image';
    return 'file-tag';
  }

  // Submit the files to the API
  submitFiles(): void {
    const formData = new FormData();

    // Append each file to the FormData object
    this.uploadedFiles.forEach((file) => {
      formData.append('files', file, file.name);
    });

    // Make the API call (replace with your API URL)
    // this.http.post('https://your-api-url.com/upload', formData).subscribe(
    //   (response) => {
    //     console.log('File upload successful', response);
    //   },
    //   (error) => {
    //     console.error('File upload failed', error);
    //   }
    // );
  }
}
