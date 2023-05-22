import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablefromarrayComponent } from './observablefromarray.component';

describe('ObservablefromarrayComponent', () => {
  let component: ObservablefromarrayComponent;
  let fixture: ComponentFixture<ObservablefromarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablefromarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablefromarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
