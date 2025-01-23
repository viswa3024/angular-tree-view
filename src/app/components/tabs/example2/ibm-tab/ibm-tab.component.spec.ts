import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmTabComponent } from './ibm-tab.component';

describe('IbmTabComponent', () => {
  let component: IbmTabComponent;
  let fixture: ComponentFixture<IbmTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbmTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IbmTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
