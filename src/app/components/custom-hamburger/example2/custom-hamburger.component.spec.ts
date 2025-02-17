import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHamburgerComponent } from './custom-hamburger.component';

describe('CustomHamburgerComponent', () => {
  let component: CustomHamburgerComponent;
  let fixture: ComponentFixture<CustomHamburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHamburgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
