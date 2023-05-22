import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviouralsubjectComponent } from './behaviouralsubject.component';

describe('BehaviouralsubjectComponent', () => {
  let component: BehaviouralsubjectComponent;
  let fixture: ComponentFixture<BehaviouralsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviouralsubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviouralsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
