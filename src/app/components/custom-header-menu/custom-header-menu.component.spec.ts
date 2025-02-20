import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderMenuComponent } from './custom-header-menu.component';

describe('CustomHeaderMenuComponent', () => {
  let component: CustomHeaderMenuComponent;
  let fixture: ComponentFixture<CustomHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeaderMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
