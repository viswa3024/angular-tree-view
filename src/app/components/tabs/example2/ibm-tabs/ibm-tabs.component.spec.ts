import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmTabsComponent } from './ibm-tabs.component';

describe('IbmTabsComponent', () => {
  let component: IbmTabsComponent;
  let fixture: ComponentFixture<IbmTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbmTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IbmTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
