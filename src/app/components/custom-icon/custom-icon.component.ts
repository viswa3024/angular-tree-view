import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.scss']
})
export class CustomIconComponent implements OnChanges {
  @Input() name: string | number = '';  // Icon name can be a string or number
  @Input() size: number | string = 24;  // Size of the icon (can be a number or string)
  @Input() color: string = 'black';  // Color of the icon (default: black)
  @Input() className: string = '';  // Custom class name for additional styling

  // List of available icon names and their respective SVG paths
  icons: { [key: string]: string } = {
    add: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5"></path></svg>`,
    delete: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V7H6v12zm3-7h2v2H9v-2zm4 0h2v2h-2v-2z"></path></svg>`,
    // Add other icons here
  };

  ngOnChanges(changes: SimpleChanges): void {
    // Convert size to number if it's a string
    if (typeof this.size === 'string') {
      this.size = +this.size;  // Convert to number
    }
  }

  get iconSize(): number {
    return typeof this.size === 'number' ? this.size : 24;  // Return a number value, default to 24 if invalid
  }

  // Fixing the type issue by ensuring 'name' is treated as a string
  isValidIconName(name: string | number): name is keyof typeof this.icons {
    if (typeof name === 'string') {
      return name in this.icons;
    }
    return false;
  }
}
