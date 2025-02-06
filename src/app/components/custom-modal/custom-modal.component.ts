import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @Input() open: boolean = false;
  @Input() width: string = '400px';  // Default width
  @Input() alignment: 'left' | 'right' | 'center' = 'center';  // Default to center alignment
  @Output() modalClose = new EventEmitter<void>();

  closeModal() {
    this.modalClose.emit();
  }
}
