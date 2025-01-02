import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCssComponent } from './global-css.component';

describe('GlobalCssComponent', () => {
  let component: GlobalCssComponent;
  let fixture: ComponentFixture<GlobalCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
