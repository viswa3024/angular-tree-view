import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-loading',
  templateUrl: './custom-loading.component.html',
  styleUrls: ['./custom-loading.component.scss']
})
export class CustomLoadingComponent {
  @Input() isActive: boolean = false; // Show or hide the loader
  @Input() height: string = '48px'; // Loader height
  @Input() width: string = '48px'; // Loader width
  @Input() color: string = '#ffffff'; // Loader border color
  @Input() borderWidth: string = '5px'; // Loader border width
}
