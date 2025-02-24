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
    const visible = this.numOfItemsToShow; // Replace with `this.numOfItemsToShow` if dynamic
  
    if (total <= visible) {
      this.pagination = Array.from({ length: total }, (_, i) => i + 1);
      return;
    }
  
    if (current <= visible - 2) {
      pagination.push(...Array.from({ length: visible - 1 }, (_, i) => i + 1));
      pagination.push('secondDots', total);
    } else if (current >= total - (visible - 3)) {
      pagination.push(1, 'firstDots');
      pagination.push(...Array.from({ length: visible - 1 }, (_, i) => total - (visible - 2) + i));
    } else {
      pagination.push(1, 'firstDots', current - 1, current, current + 1, 'secondDots', total);
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
