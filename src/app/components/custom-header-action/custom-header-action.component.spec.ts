import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderActionComponent } from './custom-header-action.component';

describe('CustomHeaderActionComponent', () => {
  let component: CustomHeaderActionComponent;
  let fixture: ComponentFixture<CustomHeaderActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeaderActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHeaderActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
