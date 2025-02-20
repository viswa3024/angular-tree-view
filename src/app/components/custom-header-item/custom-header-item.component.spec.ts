import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderItemComponent } from './custom-header-item.component';

describe('CustomHeaderItemComponent', () => {
  let component: CustomHeaderItemComponent;
  let fixture: ComponentFixture<CustomHeaderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeaderItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
