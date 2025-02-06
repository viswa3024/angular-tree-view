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

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.initializeTooltip();
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
}
