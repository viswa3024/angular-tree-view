import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent {
  @Input() steps: string[] = [];
  @Input() current: number = 0; // Current active step
  @Input() spacing: 'equal' | 'condensed' | 'default' = 'default';

  @Output() stepSelected = new EventEmitter<number>();

  selectStep(index: number) {
    if (index <= this.current) {
      this.current = index;
      this.stepSelected.emit(index);
    }
  }
}
