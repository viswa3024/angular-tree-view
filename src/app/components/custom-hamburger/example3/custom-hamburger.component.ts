// custom-hamburger.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-hamburger',
  templateUrl: './custom-hamburger.component.html',
  styleUrls: ['./custom-hamburger.component.scss']
})
export class CustomHamburgerComponent {
  @Input() clickFunction: Function | undefined; // Accept a click function
  @Input() color: string = '#333'; // Default color
  @Input() height: string = '20px'; // Default height
  @Input() width: string = '30px'; // Default width
  isOpen: boolean = false;

  // This function will now only change color without affecting the isOpen state
  toggleMenu() {
    // Change color to blue on click
    this.color = 'blue'; 
    if (this.clickFunction) {
      this.clickFunction(); // Call the dynamic function if provided
    }
  }
}
