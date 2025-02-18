import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.scss']
})
export class CustomToggleComponent {
  @Input() label: string = '';
  @Input() onText: string = 'On';
  @Input() offText: string = 'Off';

  @Input() checked: boolean = false; // ngModel will bind this property
  @Output() checkedChange = new EventEmitter<boolean>(); // For emitting changes

  onToggleChange(): void {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);  // Emit the updated value
  }
}
