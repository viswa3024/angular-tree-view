import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-loading',
  templateUrl: './custom-loading.component.html',
  styleUrls: ['./custom-loading.component.scss'],
})
export class CustomLoadingComponent {
  @Input() isActive: boolean = false; // Controls the visibility of the loader
  @Input() size: 'normal' | 'small' = 'normal'; // Determines the spinner size
  @Input() overlay: boolean = true; // Determines if the overlay is shown
}
