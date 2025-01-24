import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1ContentComponent } from './tab1-content.component';

describe('Tab1ContentComponent', () => {
  let component: Tab1ContentComponent;
  let fixture: ComponentFixture<Tab1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab1ContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
