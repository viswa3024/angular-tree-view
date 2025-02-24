import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  
  showFirstDots: boolean = false; // ✅ Added for toggling first '...'
  showSecondDots: boolean = false; // ✅ Added for toggling second '...'

  ngOnChanges(): void {
    this.generatePagination();
  }

  generatePagination(): void {
    const visiblePages = 5; // Number of always-visible pages
    const pagination: (string | number)[] = [];

    if (this.totalPages <= visiblePages) {
      for (let i = 1; i <= this.totalPages; i++) {
        pagination.push(i);
      }
    } else {
      pagination.push(1);

      if (this.currentPage > 4) {
        pagination.push('firstDots'); // First '...'
      }

      let start = Math.max(2, this.currentPage - 2);
      let end = Math.min(this.totalPages - 1, this.currentPage + 2);

      for (let i = start; i <= end; i++) {
        pagination.push(i);
      }

      if (this.currentPage < this.totalPages - 3) {
        pagination.push('secondDots'); // Second '...'
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

  changePage(page: number | Event): void {
    let pageNum: number;

    if (typeof page === 'number') {
      pageNum = page;
    } else {
      const target = page.target as HTMLSelectElement;
      pageNum = Number(target.value);
    }

    if (!isNaN(pageNum) && pageNum !== this.currentPage) {
      this.currentPage = pageNum;
      this.pageChange.emit(this.currentPage);
      this.generatePagination();
      this.showFirstDots = false; // ✅ Hide dropdown after selection
      this.showSecondDots = false; // ✅ Hide dropdown after selection
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

  toggleFirstDots(): void {
    this.showFirstDots = !this.showFirstDots;
  }

  toggleSecondDots(): void {
    this.showSecondDots = !this.showSecondDots;
  }
}
