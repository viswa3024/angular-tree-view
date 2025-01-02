import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-css',
  templateUrl: './global-css.component.html',
  styleUrls: ['./global-css.component.scss']
})
export class GlobalCssComponent implements OnInit {

  ngOnInit(): void {
    this.addGlobalCss();
  }

  addGlobalCss(): void {
    const linkElement = document.createElement('link');

    // Set attributes for the <link> element
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = 'assets/styles/dynamic-styles.css';
    linkElement.id = 'global-css';

    // Append the link element to the document head if it doesn't already exist
    if (!document.getElementById('global-css')) {
      document.head.appendChild(linkElement);
    }
  }
}
