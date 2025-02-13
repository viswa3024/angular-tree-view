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
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal'; // Added orientation input


  @Output() stepSelected = new EventEmitter<number>();

  isFinished = false; // Track whether the process is finished

  selectStep(index: number) {
    if (!this.isFinished) {
      this.current = index;
      this.stepSelected.emit(index);
    }
  }

  finishSteps() {
    this.isFinished = true;
    this.current = this.steps.length - 1;
  }
}
