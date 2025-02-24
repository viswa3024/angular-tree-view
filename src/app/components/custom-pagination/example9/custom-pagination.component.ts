import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss']
})
export class CustomPaginationComponent {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Input() disabled: boolean = false;
  @Output() pageChange = new EventEmitter<number>();

  pagination: (string | number)[] = [];
  firstDotsRange: number[] = [];
  secondDotsRange: number[] = [];
  
  showFirstDots: boolean = false;
  showSecondDots: boolean = false;

  @ViewChild('firstDotsDropdown', { static: false }) firstDotsDropdown!: ElementRef;
  @ViewChild('secondDotsDropdown', { static: false }) secondDotsDropdown!: ElementRef;

  ngOnChanges(): void {
    this.generatePagination();
  }

  generatePagination(): void {
    const visiblePages = 5;
    const pagination: (string | number)[] = [];

    if (this.totalPages <= visiblePages) {
      for (let i = 1; i <= this.totalPages; i++) {
        pagination.push(i);
      }
    } else {
      pagination.push(1);

      if (this.currentPage > 4) {
        pagination.push('firstDots');
      }

      let start = Math.max(2, this.currentPage - 2);
      let end = Math.min(this.totalPages - 1, this.currentPage + 2);

      for (let i = start; i <= end; i++) {
        pagination.push(i);
      }

      if (this.currentPage < this.totalPages - 3) {
        pagination.push('secondDots');
      }

      pagination.push(this.totalPages);
    }

    this.pagination = pagination;
    this.calculateDropdownRanges();
  }

  calculateDropdownRanges(): void {
    this.firstDotsRange = [];
    this.secondDotsRange = [];

    if (this.pagination.includes('firstDots')) {
      this.firstDotsRange = Array.from({ length: this.currentPage - 3 }, (_, i) => i + 2);
    }

    if (this.pagination.includes('secondDots')) {
      const start = this.currentPage + 3;
      const end = this.totalPages - 1;
      this.secondDotsRange = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  }

  changePage(page: number): void {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
      this.generatePagination();
      this.closeDropdowns();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  toggleFirstDots(event: MouseEvent): void {
    event.stopPropagation();
    this.showFirstDots = !this.showFirstDots;
    this.showSecondDots = false;
    setTimeout(() => this.setDropdownPosition(this.firstDotsDropdown), 0);
  }

  toggleSecondDots(event: MouseEvent): void {
    event.stopPropagation();
    this.showSecondDots = !this.showSecondDots;
    this.showFirstDots = false;
    setTimeout(() => this.setDropdownPosition(this.secondDotsDropdown), 0);
  }

  closeDropdowns(): void {
    this.showFirstDots = false;
    this.showSecondDots = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (
      this.firstDotsDropdown?.nativeElement &&
      !this.firstDotsDropdown.nativeElement.contains(event.target) &&
      this.secondDotsDropdown?.nativeElement &&
      !this.secondDotsDropdown.nativeElement.contains(event.target)
    ) {
      this.closeDropdowns();
    }
  }

  setDropdownPosition(dropdownRef: ElementRef): void {
    if (!dropdownRef) return;
    const dropdown = dropdownRef.nativeElement;
    const rect = dropdown.getBoundingClientRect();
    const isOverflowing = rect.bottom > window.innerHeight;
    dropdown.style.top = isOverflowing ? '-100%' : '100%';
  }
}
