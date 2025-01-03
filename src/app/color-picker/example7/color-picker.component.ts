import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  colors: string[] = ['#263CFF', '#000000', '#555555', '#A4A624', '#00B894', '#00CEC9', '#E17055', '#D63031'];

  // Custom colors
  backgroundCustomColor = '#ffffff';
  buttonCustomColor = '#263CFF';
  titleCustomColor = '#000000';

  // Selected colors
  backgroundSelectedColor = '#ffffff';
  buttonSelectedColor = '#263CFF';
  titleSelectedColor = '#000000';

  // Validation flags
  backgroundValid = true;
  buttonValid = true;
  titleValid = true;

  /**
   * Select a predefined color
   */
  selectColor(section: string, color: string) {
    if (section === 'background') {
      this.backgroundSelectedColor = color;
      this.backgroundCustomColor = color;
    } else if (section === 'button') {
      this.buttonSelectedColor = color;
      this.buttonCustomColor = color;
    } else if (section === 'title') {
      this.titleSelectedColor = color;
      this.titleCustomColor = color;
    }
  }

  /**
   * Handle color change from custom color input
   */
  onCustomColorChange(section: string, event: any) {
    const color = event.target.value;
    if (section === 'background') {
      this.backgroundCustomColor = color;
      this.backgroundValid = this.validateHexColor(color);
    } else if (section === 'button') {
      this.buttonCustomColor = color;
      this.buttonValid = this.validateHexColor(color);
    } else if (section === 'title') {
      this.titleCustomColor = color;
      this.titleValid = this.validateHexColor(color);
    }
  }

  /**
   * Apply custom color from input
   */
  applyCustomColor(section: string) {
    if (section === 'background') {
      this.backgroundValid = this.validateHexColor(this.backgroundCustomColor);
      if (this.backgroundValid) {
        this.backgroundSelectedColor = this.backgroundCustomColor;
      }
    } else if (section === 'button') {
      this.buttonValid = this.validateHexColor(this.buttonCustomColor);
      if (this.buttonValid) {
        this.buttonSelectedColor = this.buttonCustomColor;
      }
    } else if (section === 'title') {
      this.titleValid = this.validateHexColor(this.titleCustomColor);
      if (this.titleValid) {
        this.titleSelectedColor = this.titleCustomColor;
      }
    }
  }

  /**
   * Validate hex color input
   */
  validateHexColor(color: string): boolean {
    return /^#[0-9A-Fa-f]{6}$/.test(color);
  }

  /**
   * Submit the form and validate all fields
   */
  submitColors() {
    this.backgroundValid = this.validateHexColor(this.backgroundCustomColor);
    this.buttonValid = this.validateHexColor(this.buttonCustomColor);
    this.titleValid = this.validateHexColor(this.titleCustomColor);

    if (this.backgroundValid && this.buttonValid && this.titleValid) {
      alert(`Colors Submitted Successfully:\nBackground: ${this.backgroundSelectedColor}\nButton: ${this.buttonSelectedColor}\nTitle: ${this.titleSelectedColor}`);
    } else {
      alert('Please fix the invalid custom color fields before submitting.');
    }
  }
}
