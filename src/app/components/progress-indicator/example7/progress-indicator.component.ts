import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent {
  @Input() steps: { label: string; status: 'completed' | 'current' | 'incomplete' | 'failed' | 'disabled' }[] = [];
  @Output() stepSelected = new EventEmitter<number>();

  selectStep(index: number) {
    if (this.steps[index].status !== 'disabled' && this.steps[index].status !== 'completed') {
      this.stepSelected.emit(index);
    }
  }
}
