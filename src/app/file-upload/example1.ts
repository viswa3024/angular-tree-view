import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  uploadedFile: File | null = null;
  filePreview: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const fileUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png';
    const fileName = 'example.png';

    this.http.get(fileUrl, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        // Create a File object from the Blob
        this.uploadedFile = new File([blob], fileName, { type: blob.type });

        // Set the filePreview for displaying in the UI
        this.filePreview = URL.createObjectURL(blob);

        console.log('File successfully fetched and created:', this.uploadedFile);
      },
      error: (error) => {
        console.error('Error fetching the file:', error);
      },
    });
  }
}
