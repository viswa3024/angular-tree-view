import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {
  @Input() options: string[] = [];
  @Input() selectedOption: string = '';
  @Output() selectedOptionChange = new EventEmitter<string>();

  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.selectedOptionChange.emit(this.selectedOption);
    this.isOpen = false;
  }
}
