import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dynamic-css',
  templateUrl: './dynamic-css.component.html',
  styleUrls: ['./dynamic-css.component.scss'],
  encapsulation: ViewEncapsulation.None // Disable encapsulation
})
export class DynamicCssComponent implements OnInit {

  ngOnInit(): void {
    this.addDynamicStyles();
  }

  addDynamicStyles(): void {
    // Check if the stylesheet already exists
    let dynamicStyleSheet = Array.from(document.styleSheets).find(sheet => {
      const ownerNode = sheet.ownerNode;
      return ownerNode instanceof Element && ownerNode.id === 'dynamic-styles';
    });
  
    if (!dynamicStyleSheet) {
      // Create a new <style> element
      const styleElement = document.createElement('style');
      styleElement.id = 'dynamic-styles';
      document.head.appendChild(styleElement);
  
      // Retrieve the stylesheet
      dynamicStyleSheet = Array.from(document.styleSheets).find(sheet => {
        const ownerNode = sheet.ownerNode;
        return ownerNode === styleElement;
      }) as CSSStyleSheet;
    }
  
    if (dynamicStyleSheet) {
      // Clear any existing rules
      while (dynamicStyleSheet.cssRules.length > 0) {
        dynamicStyleSheet.deleteRule(0);
      }
  
      // Add dynamic CSS rules
      dynamicStyleSheet.insertRule(`
        .test-class {
          background-color: #FFD700;
          color: #000;
          padding: 15px;
          border-radius: 8px;
          font-size: 18px;
          text-align: center;
        }
      `);
    }
  }
  
}
