import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTreeViewComponent } from './custom-tree-view.component';

describe('CustomTreeViewComponent', () => {
  let component: CustomTreeViewComponent;
  let fixture: ComponentFixture<CustomTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTreeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
