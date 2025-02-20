import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-hamburger',
  template: `
    <button class="custom-hamburger" (click)="toggleMenu()">☰</button>
  `,
  styleUrls: ['./custom-hamburger.component.scss']
})
export class CustomHamburgerComponent {
  @Output() menuToggle = new EventEmitter<void>();

  toggleMenu() {
    this.menuToggle.emit();
  }
}
