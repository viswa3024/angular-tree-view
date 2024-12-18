import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  uploadedFile: File | null = null;
  filePreview: string | ArrayBuffer | null = null;
  errorFile: File | null = null;
  errorMessage: string = '';

  // Handle file input (single file)
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      // Validate file type
      if (this.isValidFile(file)) {
        this.uploadedFile = file;
        this.errorFile = null; // Clear error if valid file
        this.errorMessage = ''; // Clear any existing error message
        this.previewFile(file);
      } else {
        this.uploadedFile = null; // Clear uploaded file
        this.errorFile = file;
        this.errorMessage = 'Invalid file type. Please upload a .jpg, .jpeg, .png, or .svg file.';
        this.filePreview = null; // Clear the file preview if the file is invalid
      }
    }
  }

  // Check if the uploaded file is valid (case insensitive check)
  isValidFile(file: File): boolean {
    const validExtensions = ['jpg', 'jpeg', 'png', 'svg'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    return validExtensions.includes(fileExtension || '');
  }

  // Preview the uploaded file (if it's an image or SVG)
  previewFile(file: File): void {
    const reader = new FileReader();

    // For image or SVG files, read them as a data URL
    if (this.isImage(file)) {
      reader.onload = () => {
        this.filePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Check if the uploaded file is an image or SVG
  isImage(file: File): boolean {
    return /\.(jpg|jpeg|png|svg)$/i.test(file.name);
  }

  // Remove the uploaded file
  removeFile(): void {
    this.uploadedFile = null;
    this.filePreview = null;
  }

  // Remove the error file
  removeErrorFile(): void {
    this.errorFile = null;
    this.errorMessage = '';
  }

  // Determine file type for styling
  getFileType(name: string): string {
    if (/\.(jpg|jpeg|png|svg)$/i.test(name)) return 'Image';
    return 'File';
  }

  // Add class for file-type-specific styling
  getFileTypeClass(name: string): string {
    if (/\.(jpg|jpeg|png|svg)$/i.test(name)) return 'file-tag image';
    return 'file-tag';
  }

  // Submit the file to the API
  submitFile(): void {
    if (!this.uploadedFile) {
      console.error('No valid file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.uploadedFile, this.uploadedFile.name);

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
