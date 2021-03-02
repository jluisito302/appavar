import { TestBed } from '@angular/core/testing';

import { MttoserviceService } from './mttoservice.service';

describe('MttoserviceService', () => {
  let service: MttoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MttoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
