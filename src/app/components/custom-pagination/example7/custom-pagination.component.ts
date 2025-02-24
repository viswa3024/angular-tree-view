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
  @Input() numOfItemsToShow: number = 5;

  pagination: (string | number)[] = [];
  firstDotsRange: number[] = [];
  secondDotsRange: number[] = [];

  ngOnChanges(): void {
    this.generatePagination();
  }

  generatePagination(): void {
    const pagination: (string | number)[] = [];
    const total = this.totalPages;
    const current = this.currentPage;
    const visible = Math.max(1, this.numOfItemsToShow || 5); // Ensure at least 1 item is shown
  
    if (total <= visible) {
      this.pagination = Array.from({ length: total }, (_, i) => i + 1);
      return;
    }
  
    if (visible === 1) {
      this.pagination = [current]; // Show only the current page
      return;
    }
  
    if (visible === 2) {
      this.pagination = current === 1 ? [1, total] : [1, total]; // Show first and last page only
      return;
    }
  
    if (visible === 3) {
      if (current <= 2) {
        this.pagination = [1, 2, '...', total]; // Keep dots when needed
      } else if (current >= total - 1) {
        this.pagination = [1, '...', total - 1, total];
      } else {
        this.pagination = [1, '...', current, '...', total]; // Keep middle dynamic
      }
      return;
    }
  
    if (current <= visible - 2) {
      pagination.push(...Array.from({ length: visible - 1 }, (_, i) => i + 1));
      pagination.push('...', total);
    } else if (current >= total - (visible - 3)) {
      pagination.push(1, '...');
      pagination.push(...Array.from({ length: visible - 1 }, (_, i) => total - (visible - 2) + i));
    } else {
      pagination.push(1, '...', current - 1, current, current + 1, '...', total);
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
}
