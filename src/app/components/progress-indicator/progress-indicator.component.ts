import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent {
  @Input() steps: { text: string; state: string[] }[] = [];
  @Input() spacing: 'equal' | 'condensed' | 'default' = 'default';
  @Output() stepSelected = new EventEmitter<string>();

  selectStep(stepText: string) {
    this.stepSelected.emit(stepText);
  }
}
