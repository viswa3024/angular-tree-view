import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  // Predefined colors
  colors: string[] = ['#263CFF', '#000000', '#555555', '#A4A624', '#00B894', '#00CEC9', '#E17055', '#D63031'];

  // Default selected colors for sections
  selectedColors = {
    background: '#ffffff',
    button: '#263CFF',
    title: '#000000',
  };

  // Custom color inputs for sections
  customColors = {
    background: '#ffffff',
    button: '#263CFF',
    title: '#000000',
  };

  /**
   * Select a color for a specific section
   * @param section - The section to update (e.g., 'background', 'button', 'title')
   * @param color - The selected color
   */
  selectColor(section: keyof typeof this.selectedColors, color: string) {
    this.selectedColors[section] = color;
    this.customColors[section] = color;
  }

  /**
   * Update the custom color using the color picker
   * @param section - The section to update (e.g., 'background', 'button', 'title')
   * @param event - The input event containing the new color
   */
  onCustomColorChange(section: keyof typeof this.customColors, event: any) {
    const color = event.target.value;
    this.customColors[section] = color;
    this.selectedColors[section] = color;
  }

  /**
   * Update the custom color using manual input
   * @param section - The section to update (e.g., 'background', 'button', 'title')
   */
  onCustomColorInput(section: keyof typeof this.customColors) {
    const color = this.customColors[section];
    if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
      this.selectedColors[section] = color;
    } else {
      alert('Please enter a valid hex color code.');
    }
  }
}
