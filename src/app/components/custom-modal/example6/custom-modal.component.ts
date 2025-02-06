import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @Input() open: boolean = false;
  @Input() width: string = '400px';  // Default width, can be dynamic from parent
  @Output() modalClose = new EventEmitter<void>();

  closeModal() {
    this.modalClose.emit();
  }
}
