import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NrxGraphExampleComponent } from './nrx-graph-example.component';

describe('NrxGraphExampleComponent', () => {
  let component: NrxGraphExampleComponent;
  let fixture: ComponentFixture<NrxGraphExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NrxGraphExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NrxGraphExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
