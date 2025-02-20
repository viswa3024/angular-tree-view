import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  pages: (number | string)[] = [];
  maxVisiblePages: number = 5;

  ngOnInit() {
    this.generatePages();
  }

  generatePages() {
    this.pages = [];

    if (this.totalPages <= this.maxVisiblePages) {
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    } else {
      if (this.currentPage <= 3) {
        this.pages = [1, 2, 3, '...', this.totalPages];
      } else if (this.currentPage >= this.totalPages - 2) {
        this.pages = [1, '...', this.totalPages - 2, this.totalPages - 1, this.totalPages];
      } else {
        this.pages = [1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages];
      }
    }
  }

  changePage(page: number | string) {
    if (typeof page === 'number' && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
      this.generatePages();
    }
  }
}
