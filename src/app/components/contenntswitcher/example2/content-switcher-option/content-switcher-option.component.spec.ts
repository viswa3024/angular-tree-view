import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSwitcherOptionComponent } from './content-switcher-option.component';

describe('ContentSwitcherOptionComponent', () => {
  let component: ContentSwitcherOptionComponent;
  let fixture: ComponentFixture<ContentSwitcherOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSwitcherOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSwitcherOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
