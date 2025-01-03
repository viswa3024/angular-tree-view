import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  colors: string[] = ['#263CFF', '#000000', '#555555', '#A4A624', '#00B894', '#00CEC9', '#E17055', '#D63031'];

  // Selected colors
  selectedColors: any = {
    background: '#ffffff',
    button: '#263CFF',
    title: '#000000',
  };

  // Custom color inputs for sections
  customColors: any = {
    background: '#ffffff',
    button: '#263CFF',
    title: '#000000',
  };

  // Validation flags for custom colors
  validColors: any = {
    background: true,
    button: true,
    title: true,
  };

  /**
   * Select a predefined color
   */
  selectColor(section: string, color: string) {
    this.selectedColors[section] = color;
    this.customColors[section] = color;
  }

  /**
   * Handle custom color input change
   */
  onCustomColorChange(section: string, event: any) {
    const color = event.target.value;
    this.customColors[section] = color;
    this.validColors[section] = this.validateHexColor(color);
  }

  /**
   * Apply custom color to the selected color
   */
  applyCustomColor(section: string) {
    this.validColors[section] = this.validateHexColor(this.customColors[section]);
    if (this.validColors[section]) {
      this.selectedColors[section] = this.customColors[section];
    }
  }

  /**
   * Validate hex color input
   */
  validateHexColor(color: string): boolean {
    return /^#[0-9A-Fa-f]{6}$/.test(color);
  }

  /**
   * Submit the selected and custom colors
   */
  submitColors() {
    // Validate all custom colors
    Object.keys(this.customColors).forEach(section => {
      this.validColors[section] = this.validateHexColor(this.customColors[section]);
    });

    // Check if all colors are valid
    const allValid = Object.values(this.validColors).every(valid => valid);

    if (allValid) {
      alert(`Colors Submitted Successfully:\nBackground: ${this.selectedColors.background}\nButton: ${this.selectedColors.button}\nTitle: ${this.selectedColors.title}`);
    } else {
      alert('Please fix the invalid custom color fields before submitting.');
    }
  }
}