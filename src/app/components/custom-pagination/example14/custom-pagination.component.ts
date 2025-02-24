import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss']
})
export class CustomPaginationComponent implements AfterViewInit {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Input() disabled: boolean = false;
  @Output() pageChange = new EventEmitter<number>();

  pagination: (string | number)[] = [];
  firstDotsRange: number[] = [];
  secondDotsRange: number[] = [];

  showFirstDots: boolean = false;
  showSecondDots: boolean = false;
  @Input() public numOfItemsToShow: number = 5

  @ViewChild('firstDotsDropdown', { static: false }) firstDotsDropdown!: ElementRef;
  @ViewChild('secondDotsDropdown', { static: false }) secondDotsDropdown!: ElementRef;

  ngAfterViewInit(): void {
    this.generatePagination();
  }

  ngOnChanges(): void {
    this.generatePagination();
  }

  generatePagination(): void {
    this.pagination = [];
    this.showFirstDots = false;
    this.showSecondDots = false;
  
    const visiblePages = this.numOfItemsToShow; // Set number of visible pages


    console.log("visiblePages: ", visiblePages)
  
    // Case 1: If total pages are less than or equal to visiblePages, show all pages
    if (this.totalPages <= visiblePages) {
      for (let i = 1; i <= this.totalPages; i++) {
        this.pagination.push(i);
      }
      return;
    }
  
    this.pagination.push(1); // Always show the first page
  
    // Case 2: Show first dots dropdown if needed
    if (this.currentPage > Math.ceil(visiblePages / 2)) {
      this.pagination.push('firstDots');
    }
  
    // Calculate start and end dynamically based on visiblePages
    let start = Math.max(2, this.currentPage - Math.floor(visiblePages / 2));
    let end = Math.min(this.totalPages - 1, this.currentPage + Math.floor(visiblePages / 2));
  
    // Ensure proper range when near start or end
    if (this.currentPage < Math.ceil(visiblePages / 2)) {
      start = 2;
      end = visiblePages - 1;
    } else if (this.currentPage > this.totalPages - Math.ceil(visiblePages / 2)) {
      start = this.totalPages - (visiblePages - 2);
      end = this.totalPages - 1;
    }
  
    for (let i = start; i <= end; i++) {
      this.pagination.push(i);
    }
  
    // Case 3: Show second dots dropdown if needed
    if (this.currentPage < this.totalPages - Math.floor(visiblePages / 2)) {
      this.pagination.push('secondDots');
    }
  
    this.pagination.push(this.totalPages); // Always show the last page
  
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
      this.positionDropdown(this.firstDotsDropdown);
    } else {
      this.showSecondDots = !this.showSecondDots;
      this.showFirstDots = false;
      this.positionDropdown(this.secondDotsDropdown);
    }
  }

  toggleDropdownbkp(type: 'first' | 'second', event: MouseEvent): void {
    event.stopPropagation();
  
    const dropdown = type === 'first' ? this.firstDotsDropdown : this.secondDotsDropdown;
    if (!dropdown) return;
  
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const dropdownEl = dropdown.nativeElement;
  
    // Get viewport height
    const viewportHeight = window.innerHeight;
  
    // Dropdown height (approximate or get dynamically)
    const dropdownHeight = dropdownEl.offsetHeight || 150;
  
    // Check available space
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
  
    // Open dropdown below or above based on space
    if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
      dropdownEl.style.top = `-${dropdownHeight}px`; // Open above
    } else {
      dropdownEl.style.top = `${rect.height}px`; // Open below
    }
  
    if (type === 'first') {
      this.showFirstDots = !this.showFirstDots;
      this.showSecondDots = false;
    } else {
      this.showSecondDots = !this.showSecondDots;
      this.showFirstDots = false;
    }
  }
  

  positionDropdown(dropdownRef: ElementRef): void {
    if (!dropdownRef || !dropdownRef.nativeElement) return;

    requestAnimationFrame(() => {
      const dropdown = dropdownRef.nativeElement;
      const rect = dropdown.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > windowHeight) {
        dropdown.classList.add('upward'); // Open above
      } else {
        dropdown.classList.remove('upward'); // Open below
      }
    });
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
