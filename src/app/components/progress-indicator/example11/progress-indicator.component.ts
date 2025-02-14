import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent {
  @Input() steps: { text: string; state: string[] }[] = [
    { text: 'Step 1', state: ['current'] },
    { text: 'Step 2', state: ['incomplete'] },
    { text: 'Step 3', state: ['incomplete'] }
  ];
  @Input() current: number = 0;
  @Input() spacing: 'equal' | 'condensed' | 'default' = 'default';

  @Output() stepSelected = new EventEmitter<number>();

  isFinished = false;

  selectStep(index: number) {
    if (!this.isFinished) {
      this.steps.forEach((step, i) => {
        step.state = i < index ? ['complete'] : i === index ? ['current'] : ['incomplete'];
      });
      this.current = index;
      this.stepSelected.emit(index);
    }
  }

  finishSteps() {
    this.isFinished = true;
    this.current = this.steps.length - 1;
    this.steps.forEach((step) => (step.state = ['complete']));
  }
}