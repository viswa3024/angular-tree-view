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
    let styleElement = document.getElementById('dynamic-styles') as HTMLStyleElement | null;
  
    if (!styleElement) {
      // If the style element doesn't exist, create it
      styleElement = this.renderer.createElement('style');
      this.renderer.setAttribute(styleElement, 'id', 'dynamic-styles');
      this.renderer.appendChild(document.head, styleElement);
    }
  
    if (styleElement) {
      // Add or update the styles
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
      styleElement.textContent = styles;
    }
  }
}
