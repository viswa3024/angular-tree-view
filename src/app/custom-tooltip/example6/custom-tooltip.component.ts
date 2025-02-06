import { Component, ElementRef, Input, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-custom-tooltip', // Using this as an element
  template: `<div class="tooltip-wrapper" (mouseenter)="showTooltip()" (mouseleave)="hideTooltip()">
               <ng-content></ng-content>  <!-- Content projection for children -->
             </div>`,
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent implements OnInit, OnDestroy {
  @Input() tooltipText: string = ''; // Tooltip text content
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top'; // Tooltip placement
  private tooltipElement!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.createTooltip();
  }

  ngOnDestroy() {
    this.destroyTooltip();
  }

  // Function to create the tooltip dynamically
  private createTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'tooltip-box');
    this.renderer.addClass(this.tooltipElement, `tooltip-${this.placement}`);
    this.tooltipElement.innerText = this.tooltipText;
    this.renderer.appendChild(document.body, this.tooltipElement);
  }

  // Show the tooltip when mouse enters the wrapper
  showTooltip() {
    this.positionTooltip();
    this.renderer.setStyle(this.tooltipElement, 'visibility', 'visible');
    this.renderer.setStyle(this.tooltipElement, 'opacity', '1');
  }

  // Hide the tooltip when mouse leaves
  hideTooltip() {
    this.renderer.setStyle(this.tooltipElement, 'visibility', 'hidden');
    this.renderer.setStyle(this.tooltipElement, 'opacity', '0');
  }

  // Position the tooltip relative to the element
  private positionTooltip() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement.getBoundingClientRect();

    let top, left;

    switch (this.placement) {
      case 'top':
        top = hostPos.top - tooltipPos.height - 8;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      case 'bottom':
        top = hostPos.bottom + 8;
        left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        break;
      case 'left':
        top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        left = hostPos.left - tooltipPos.width - 8;
        break;
      case 'right':
        top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
        left = hostPos.right + 8;
        break;
    }

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
  }

  // Clean up the tooltip when the component is destroyed
  private destroyTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null!;
    }
  }
}
