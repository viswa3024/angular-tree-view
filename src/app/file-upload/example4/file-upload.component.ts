import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  uploadedFile: File | null = null;
  filePreview: string | ArrayBuffer | null = null;

  // Handle file input (single file)
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.uploadedFile = input.files[0];
      this.previewFile(this.uploadedFile);
    }
  }

  // Preview the uploaded file
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
    return /\.(jpg|jpeg|png|svg)$/.test(file.name);
  }

  // Remove the file from the list
  removeFile(): void {
    this.uploadedFile = null;
    this.filePreview = null;
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

  // Submit the file to the API
  submitFile(): void {
    if (!this.uploadedFile) {
      console.error('No file selected');
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
