import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss'],
})
export class CustomPaginationComponent {
  @Input() totalPages: number = 1; // Total number of pages
  @Input() currentPage: number = 1; // Active page
  @Input() numOfItemsToShow: number = 5; // Number of page buttons to show
  @Input() disabled: boolean = false; // Disable pagination

  @Output() pageChange = new EventEmitter<number>(); // Emit event when page changes

  get pages(): number[] {
    const pages = [];
    let start = Math.max(1, this.currentPage - Math.floor(this.numOfItemsToShow / 2));
    let end = Math.min(this.totalPages, start + this.numOfItemsToShow - 1);

    if (end - start + 1 < this.numOfItemsToShow) {
      start = Math.max(1, end - this.numOfItemsToShow + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(page: number) {
    if (!this.disabled && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage() {
    if (!this.disabled && this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (!this.disabled && this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }
}
