import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @Input() open: boolean = false; // Modal visibility control
  @Output() modalClose: EventEmitter<boolean> = new EventEmitter(); // Event to emit when modal is closed

  closeModal(): void {
    this.open = false;
    this.modalClose.emit(false); // Emit close event
  }
}
