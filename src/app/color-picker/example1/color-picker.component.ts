import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  // Predefined color options
  colors: string[] = ['#263CFF', '#000000', '#555555', '#A4A624', '#00B894', '#00CEC9', '#E17055', '#D63031'];
  selectedColor: string = this.colors[0]; // Default color selection

  // Custom color input
  customColor: string = '#263CFF';

  // Method to select a color
  selectColor(color: string) {
    this.selectedColor = color;
    this.customColor = color;
  }

  // Method to handle custom color input
  onCustomColorChange(event: any) {
    this.customColor = event.target.value;
    this.selectedColor = this.customColor;
  }
}
