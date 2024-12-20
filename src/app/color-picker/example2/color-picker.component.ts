import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  // Predefined colors
  colors: string[] = ['#263CFF', '#000000', '#555555', '#A4A624', '#00B894', '#00CEC9', '#E17055', '#D63031'];
  selectedColor: string = this.colors[0]; // Default selected color

  // Custom color input
  customColor: string = this.colors[0];
  customColorInput: string = this.colors[0]; // Tracks manual color input

  // Select color method
  selectColor(color: string) {
    this.selectedColor = color;
    this.customColor = color;
  }

  // Update custom color from color picker
  onCustomColorChange(event: any) {
    this.customColor = event.target.value;
    this.selectedColor = this.customColor;
  }

  // Update custom color from manual input
  onCustomColorInput() {
    if (/^#[0-9A-Fa-f]{6}$/.test(this.customColor)) {
      this.customColorInput = this.customColor;
    }
  }

  // Apply custom color
  applyCustomColor() {
    if (/^#[0-9A-Fa-f]{6}$/.test(this.customColorInput)) {
      this.customColor = this.customColorInput;
      this.selectedColor = this.customColor;
    } else {
      alert('Please enter a valid hex color code.');
    }
  }
}
