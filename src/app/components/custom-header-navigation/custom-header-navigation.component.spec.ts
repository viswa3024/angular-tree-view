import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderNavigationComponent } from './custom-header-navigation.component';

describe('CustomHeaderNavigationComponent', () => {
  let component: CustomHeaderNavigationComponent;
  let fixture: ComponentFixture<CustomHeaderNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeaderNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHeaderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
