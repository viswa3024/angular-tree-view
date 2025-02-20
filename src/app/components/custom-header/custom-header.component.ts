import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  template: `
    <header class="custom-header">
      <button class="custom-hamburger" (click)="onMenuToggle()">☰
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <rect width="30" height="4" x="5" y="6" fill="white" />
  <rect width="30" height="4" x="5" y="14" fill="white" />
  <rect width="30" height="4" x="5" y="22" fill="white" />
  <rect width="30" height="4" x="5" y="30" fill="white" />
</svg>


<svg width="30" height="24" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="3" x="3" y="2" fill="white" />
  <rect width="24" height="3" x="3" y="8" fill="white" />
  <rect width="24" height="3" x="3" y="14" fill="white" />
  <rect width="24" height="3" x="3" y="20" fill="white" />
</svg>


<svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
  <rect width="18" height="2" x="3" y="2" fill="white" />
  <rect width="18" height="2" x="3" y="7" fill="white" />
  <rect width="18" height="2" x="3" y="12" fill="white" />
  <rect width="18" height="2" x="3" y="17" fill="white" />
</svg>


<svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
  <rect width="14" height="2" x="3" y="1" fill="white" />
  <rect width="14" height="2" x="3" y="5" fill="white" />
  <rect width="14" height="2" x="3" y="9" fill="white" />
  <rect width="14" height="2" x="3" y="13" fill="white" />
</svg>


<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
  <rect width="14" height="2" x="3" y="1" fill="white" />
  <rect width="14" height="2" x="3" y="4" fill="white" />
  <rect width="14" height="2" x="3" y="7" fill="white" />
  <rect width="14" height="2" x="3" y="10" fill="white" />
</svg>

<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
  <rect width="14" height="1.5" x="3" y="1" fill="white" />
  <rect width="14" height="1.5" x="3" y="4" fill="white" />
  <rect width="14" height="1.5" x="3" y="7" fill="white" />
  <rect width="14" height="1.5" x="3" y="10" fill="white" />
</svg>

<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
  <rect width="14" height="1" x="3" y="1" fill="white" />
  <rect width="14" height="1" x="3" y="4" fill="white" />
  <rect width="14" height="1" x="3" y="7" fill="white" />
  <rect width="14" height="1" x="3" y="10" fill="white" />
</svg>


 <div class="menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>



████  
████  
████  
████  





 <div class="menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>


</button>
      <div class="custom-header-title">{{ title }}</div>
      <div class="custom-header-global">
        <button 
          *ngFor="let action of actions" 
          class="custom-header-action" 
          (click)="action.onClick()"
        >
          {{ action.label }}
        </button>
      </div>
    </header>
  `,
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent {
  @Input() title: string = 'My Application';

  @Input() actions: { label: string; onClick: () => void }[] = [];

  onMenuToggle() {
    console.log('Menu toggled');
  }


  //How x and y Work in SVG:
  //x (Horizontal position) → Defines how far the rectangle is from the left side of the canvas.
  //y (Vertical position) → Defines how far the rectangle is from the top side of the canvas.
}
