import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngfordemotoprintnumbers2Component } from './ngfordemotoprintnumbers2.component';

describe('Ngfordemotoprintnumbers2Component', () => {
  let component: Ngfordemotoprintnumbers2Component;
  let fixture: ComponentFixture<Ngfordemotoprintnumbers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngfordemotoprintnumbers2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngfordemotoprintnumbers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
