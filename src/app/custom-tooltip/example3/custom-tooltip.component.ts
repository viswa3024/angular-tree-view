import { Component, Input, HostListener, ElementRef,Renderer2 , OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent implements OnInit {

  @Input() text: string = '';
  showTooltip: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip = true;
    this.adjustTooltipPosition();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.showTooltip = false;
  }

  adjustTooltipPosition() {
    const tooltipElement = this.el.nativeElement.querySelector('.tooltip');
    const parentRect = this.el.nativeElement.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();

    // Reset styles
    this.renderer.setStyle(tooltipElement, 'top', null);
    this.renderer.setStyle(tooltipElement, 'bottom', null);
    this.renderer.setStyle(tooltipElement, 'left', '50%');
    this.renderer.setStyle(tooltipElement, 'transform', 'translateX(-50%)');

    // Adjust horizontally
    if (tooltipRect.right > window.innerWidth) {
      this.renderer.setStyle(tooltipElement, 'left', `calc(100% - ${tooltipRect.width}px)`);
      this.renderer.setStyle(tooltipElement, 'transform', 'none');
    } else if (tooltipRect.left < 0) {
      this.renderer.setStyle(tooltipElement, 'left', `0px`);
      this.renderer.setStyle(tooltipElement, 'transform', 'none');
    }

    // Adjust vertically
    if (tooltipRect.bottom > window.innerHeight) {
      this.renderer.setStyle(tooltipElement, 'top', 'auto');
      this.renderer.setStyle(tooltipElement, 'bottom', '125%');
    } else {
      this.renderer.setStyle(tooltipElement, 'top', '125%');
      this.renderer.setStyle(tooltipElement, 'bottom', 'auto');
    }
  }

}
