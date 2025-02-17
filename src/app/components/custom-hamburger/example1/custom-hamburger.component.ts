// custom-hamburger.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-hamburger',
  templateUrl: './custom-hamburger.component.html',
  styleUrls: ['./custom-hamburger.component.scss']
})
export class CustomHamburgerComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
