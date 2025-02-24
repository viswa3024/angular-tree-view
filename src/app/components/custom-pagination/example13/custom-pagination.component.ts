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
    this.pagination = [];
    this.showFirstDots = false;
    this.showSecondDots = false;

    const visiblePages = 5;
    if (this.totalPages <= visiblePages) {
      for (let i = 1; i <= this.totalPages; i++) {
        this.pagination.push(i);
      }
      return;
    }

    this.pagination.push(1);

    if (this.currentPage > 4) {
      this.pagination.push('firstDots');
    }

    let start = Math.max(2, this.currentPage - 2);
    let end = Math.min(this.totalPages - 1, this.currentPage + 2);

    for (let i = start; i <= end; i++) {
      this.pagination.push(i);
    }

    if (this.currentPage < this.totalPages - 3) {
      this.pagination.push('secondDots');
    }

    this.pagination.push(this.totalPages);
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

  toggleDropdown(type: 'first' | 'second', event: Event): void {
    event.stopPropagation();
    if (type === 'first') {
      this.showFirstDots = !this.showFirstDots;
      this.showSecondDots = false;
    } else {
      this.showSecondDots = !this.showSecondDots;
      this.showFirstDots = false;
    }
  }

  changePage(page: number): void {
    if (!isNaN(page) && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
      this.generatePagination();
    }
    this.showFirstDots = false;
    this.showSecondDots = false;
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

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event): void {
    if (
      this.firstDotsDropdown &&
      this.firstDotsDropdown.nativeElement.contains(event.target)
    ) {
      return;
    }
    if (
      this.secondDotsDropdown &&
      this.secondDotsDropdown.nativeElement.contains(event.target)
    ) {
      return;
    }
    this.showFirstDots = false;
    this.showSecondDots = false;
  }
}
