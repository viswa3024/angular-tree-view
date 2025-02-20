import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss']
})
export class CustomPaginationComponent {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Input() numOfItemsToShow: number = 5;
  @Input() disabled: boolean = false;

  @Output() pageChange = new EventEmitter<number>();

  get pagination(): Array<number | string> {
    const pages: Array<number | string> = [];
    const total = this.totalPages;
    const current = this.currentPage;
    const visible = this.numOfItemsToShow;

    if (total <= visible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current <= visible - 2) {
      pages.push(...Array.from({ length: visible - 1 }, (_, i) => i + 1));
      pages.push('...', total);
    } else if (current >= total - (visible - 3)) {
      pages.push(1, '...');
      pages.push(...Array.from({ length: visible - 1 }, (_, i) => total - (visible - 2) + i));
    } else {
      pages.push(1, '...');
      pages.push(current - 1, current, current + 1);
      pages.push('...', total);
    }

    return pages;
  }

  /** ✅ Fixed: Helper function to generate page numbers for the dropdown */
  getPageArray(total: number): number[] {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  changePage(page: number | string) {
    if (typeof page === 'number' && !this.disabled) {
      this.pageChange.emit(page);
    }
  }

  selectPage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const page = Number(target.value);
    this.changePage(page);
  }
}
