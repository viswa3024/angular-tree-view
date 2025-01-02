import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dynamic-css',
  templateUrl: './dynamic-css.component.html',
  styleUrls: ['./dynamic-css.component.scss'],
})
export class DynamicCssComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.updateCssClass();
  }

  updateCssClass(): void {
    // Check if the style element already exists
    let styleElement = document.getElementById('dynamic-styles') as HTMLStyleElement | null;
    if (!styleElement) {
      // Create a new style element
      styleElement = this.renderer.createElement('style');
      this.renderer.setAttribute(styleElement, 'id', 'dynamic-styles');
      this.renderer.appendChild(document.head, styleElement);
    }

    // Define the new CSS rules
    if(styleElement){
      const styles = `
      .test-class {
        background-color: #FFD700 !important;
        color: #000 !important;
        padding: 15px !important;
        border-radius: 8px !important;
        font-size: 18px !important;
        text-align: center !important;
      }
    `;

    // Update the style element's content
    styleElement.textContent = styles;
    }  
  }
}
