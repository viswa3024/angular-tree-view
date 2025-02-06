import { Component, Input, ElementRef, Renderer2, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent {
  @Input() tooltipContent: string = '';  // Tooltip content
  @Input() placement: string = 'bottom';  // Placement of tooltip (top, bottom, left, right)
  @Input() trigger: string = 'hover';    // Trigger event for tooltip (hover, click)
  @Input() offset: { x: number, y: number } = { x: 0, y: 0 };  // Tooltip offset

  @ViewChild('tooltipTemplate', { static: true }) tooltipTemplate!: TemplateRef<any>;

  showTooltip = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  onHover(event: MouseEvent): void {
    if (this.trigger === 'hover') {
      this.showTooltip = true;
      this.positionTooltip(event);
    }
  }

  onClick(event: MouseEvent): void {
    if (this.trigger === 'click') {
      this.showTooltip = !this.showTooltip;
      if (this.showTooltip) {
        this.positionTooltip(event);
      }
    }
  }

  positionTooltip(event: MouseEvent): void {
    const tooltipElement = document.querySelector('.tooltip') as HTMLElement;
    if (tooltipElement) {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const tooltipRect = tooltipElement.getBoundingClientRect();

      let top = rect.top + window.scrollY + rect.height + this.offset.y;
      let left = rect.left + window.scrollX + this.offset.x;

      // Adjust positioning based on placement
      if (this.placement === 'top') {
        top = rect.top + window.scrollY - tooltipRect.height - this.offset.y;
      } else if (this.placement === 'left') {
        left = rect.left + window.scrollX - tooltipRect.width - this.offset.x;
      } else if (this.placement === 'right') {
        left = rect.left + window.scrollX + rect.width + this.offset.x;
      }

      tooltipElement.style.top = `${top}px`;
      tooltipElement.style.left = `${left}px`;
    }
  }
}
