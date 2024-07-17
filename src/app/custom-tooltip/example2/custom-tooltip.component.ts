import { Component, Input, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent implements OnInit {

  @Input() text: string = '';
  showTooltip: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.showTooltip = false;
  }

}
