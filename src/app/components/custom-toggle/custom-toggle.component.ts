import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.scss']
})
export class CustomToggleComponent {
  @Input() label: string = 'Enable Feature';
  @Input() onText: string = 'On';
  @Input() offText: string = 'Off';
  @Input() checked: boolean = false;

  @Input() toggleSwitchBgColor: string = '';
  @Input() toggleKnobBgColor: string = '#ffffff';
  @Input() toggleOutlineColor: string = '#8d8d8d';

  @Input() toggleSwitchWidth: string = '48px';
  @Input() toggleSwitchHeight: string = '24px';
  @Input() toggleKnobWidth: string = '20px';
  @Input() toggleKnobHeight: string = '20px';

  @Output() checkedChange = new EventEmitter<boolean>();

  get switchBackground(): string {
    return this.checked ? (this.toggleSwitchBgColor || '#0062ff') : '#e0e0e0';
  }

  onToggleChange(): void {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
