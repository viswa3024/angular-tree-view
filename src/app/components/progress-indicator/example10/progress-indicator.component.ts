import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent {
  @Input() steps: { label: string, status: 'completed' | 'current' | 'incomplete' | 'failed' | 'disabled' }[] = [];
  @Input() currentStep: number = 0; // Track current step
  @Output() stepSelected = new EventEmitter<number>();
  @Input() spacing: 'equal' | 'condensed' | 'default' = 'default';
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

  selectStep(index: number) {
    // Do nothing if the step is disabled or already completed
    if (this.steps[index].status !== 'disabled' && this.steps[index].status !== 'completed') {
      // Set current step to completed and update the new step to current
      this.steps[this.currentStep].status = 'completed'; // Mark previous step as completed
      this.steps[index].status = 'current'; // Set clicked step as current
      this.currentStep = index; // Update current step
      this.stepSelected.emit(index);
    }
  }

  finishSteps() {
    // Mark final step as completed
    this.steps[this.steps.length - 1].status = 'completed';
  }
}
