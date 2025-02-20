import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderGlobalComponent } from './custom-header-global.component';

describe('CustomHeaderGlobalComponent', () => {
  let component: CustomHeaderGlobalComponent;
  let fixture: ComponentFixture<CustomHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeaderGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
