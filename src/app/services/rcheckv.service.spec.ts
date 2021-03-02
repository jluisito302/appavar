import { TestBed } from '@angular/core/testing';

import { RcheckvService } from './rcheckv.service';

describe('RcheckvService', () => {
  let service: RcheckvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RcheckvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
