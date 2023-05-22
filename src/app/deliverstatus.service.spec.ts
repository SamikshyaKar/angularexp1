import { TestBed } from '@angular/core/testing';

import { DeliverstatusService } from './deliverstatus.service';

describe('DeliverstatusService', () => {
  let service: DeliverstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
