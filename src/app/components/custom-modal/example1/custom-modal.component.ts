import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  // Modal visibility control
  @Input() open: boolean = false;
  
  // Title of the modal
  @Input() modalTitle: string = '';

  // Event to emit when the modal is closed
  @Output() modalClose: EventEmitter<boolean> = new EventEmitter();

  // Method to close the modal
  closeModal(): void {
    this.open = false;
    this.modalClose.emit(false); // Emit close event
  }

  // Method to open the modal (optional)
  openModal(): void {
    this.open = true;
  }
}
