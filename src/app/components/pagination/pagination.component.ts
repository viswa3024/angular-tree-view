import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number = 1; // Total number of pages
  @Input() currentPage: number = 1; // Current active page
  @Output() pageChanged = new EventEmitter<number>(); // Event when page changes

  pages: (number | string)[] = []; // Stores pages (numbers and dots)
  showDropdown = false; // Controls dropdown visibility

  ngOnInit() {
    this.generatePages();
  }

  // Generates page numbers with dots (...)
  generatePages() {
    this.pages = [];
    if (this.totalPages <= 5) {
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    } else {
      this.pages = [1, 2, '...', this.totalPages - 1, this.totalPages];
    }
  }

  // Changes the current page
  changePage(page: number | string) {
    if (typeof page === 'number' && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
      this.generatePages();
    }
  }

  // Toggles dropdown for dots (...)
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  // Handles page selection from dropdown
  selectPageFromDropdown(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedPage = Number(target.value);
    this.currentPage = selectedPage;
    this.showDropdown = false;
    this.pageChanged.emit(this.currentPage);
    this.generatePages();
  }

  // Returns a full list of pages for the dropdown
  getAllPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
