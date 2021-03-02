import { TestBed } from '@angular/core/testing';

import { VerifinformacionService } from './verifinformacion.service';

describe('VerifinformacionService', () => {
  let service: VerifinformacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifinformacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
