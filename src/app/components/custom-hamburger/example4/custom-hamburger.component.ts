import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-custom-hamburger',
  templateUrl: './custom-hamburger.component.html',
  styleUrls: ['./custom-hamburger.component.scss']
})
export class CustomHamburgerComponent {
  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>(); // Emit event when menu is toggled
  @Input() color: string = '#333'; // Default color
  @Input() height: string = '20px'; // Default height
  @Input() width: string = '30px'; // Default width
  isOpen: boolean = false; // Track open/close state

  toggleMenu() {
    this.isOpen = !this.isOpen; // Toggle open/close state
    this.menuToggled.emit(this.isOpen); // Emit the state to the parent
  }
}
