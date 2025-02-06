import { Component, Input, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

// Importing Bootstrap JS dynamically
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-custom-tooltip',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent implements AfterViewInit, OnDestroy {
  @Input() tooltipText: string = '';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  
  // Margin inputs for the tooltip
  @Input() marginTop: string = '0px';
  @Input() marginBottom: string = '0px';
  @Input() marginLeft: string = '0px';
  @Input() marginRight: string = '0px';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.initializeTooltip();
    this.applyMargins();
  }

  ngOnDestroy() {
    this.destroyTooltip();
  }

  private initializeTooltip() {
    const element = this.el.nativeElement;

    // Initialize Bootstrap's tooltip on the element
    const tooltipInstance = new bootstrap.Tooltip(element, {
      title: this.tooltipText,
      placement: this.placement
    });
  }

  private destroyTooltip() {
    const element = this.el.nativeElement;
    const tooltipInstance = bootstrap.Tooltip.getInstance(element);
    if (tooltipInstance) {
      tooltipInstance.dispose();
    }
  }

  // Method to apply margin styles to the element
  private applyMargins() {
    const element = this.el.nativeElement;

    // Apply the margin styles dynamically
    this.renderer.setStyle(element, 'margin-top', this.marginTop);
    this.renderer.setStyle(element, 'margin-bottom', this.marginBottom);
    this.renderer.setStyle(element, 'margin-left', this.marginLeft);
    this.renderer.setStyle(element, 'margin-right', this.marginRight);
  }
}
