import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dynamic-css',
  templateUrl: './dynamic-css.component.html',
  styleUrls: ['./dynamic-css.component.scss'],
  encapsulation: ViewEncapsulation.None // Disable encapsulation
})
export class DynamicCssComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.updateCssClass();
  }

  updateCssClass(): void {
    // Check if the style element already exists
    let styleElement = document.getElementById('dynamic-styles');
    if (!styleElement) {
      // Create a new style element
      styleElement = this.renderer.createElement('style');
      this.renderer.setAttribute(styleElement, 'id', 'dynamic-styles');
      this.renderer.appendChild(document.head, styleElement);
    }

    // Define the new CSS rules
    const styles = `
      .test-class {
        background-color: #FFD700;
        color: #000;
        padding: 15px;
        border-radius: 8px;
        font-size: 18px;
        text-align: center;
      }
    `;

    // Update the style element's content
    styleElement!.textContent = styles;
  }
}
