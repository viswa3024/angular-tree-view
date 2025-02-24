import { 
  Component, ElementRef, HostListener, Input, ViewChild, TemplateRef 
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
})
export class CustomDropdownComponent {
  @Input() options: string[] = []; // Dropdown options
  @Input() placeholder = 'Select an option';

  isOpen = false;
  selectedOption: string | null = null;
  overlayRef: OverlayRef | null = null;

  @ViewChild('dropdownTrigger') dropdownTrigger!: ElementRef;
  @ViewChild('dropdownTemplate') dropdownTemplate!: TemplateRef<any>;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  toggleDropdown() {
    if (this.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  openDropdown() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.dropdownTrigger)
      .withFlexibleDimensions(false) // Prevent shrinking
      .withPush(true) // Ensures dropdown stays within viewport
      .withViewportMargin(10) // Prevents cutoff
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: 5, // ✅ Add space below trigger
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          offsetY: -5, // ✅ Add space above trigger
        },
      ]);
  
    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(), // ✅ Fixes scrolling issues
      hasBackdrop: true,
    });
  
    if (this.dropdownTemplate) {
      this.overlayRef.attach(new TemplatePortal(this.dropdownTemplate, this.viewContainerRef));
    }
  
    this.overlayRef.backdropClick().subscribe(() => this.closeDropdown());
  
    this.isOpen = true;
  }
  

  closeDropdown() {
    this.overlayRef?.detach();
    this.isOpen = false;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.closeDropdown();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.dropdownTrigger.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
}
