import { TestBed } from '@angular/core/testing';

import { AllvehiculosService } from './allvehiculos.service';

describe('AllvehiculosService', () => {
  let service: AllvehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllvehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
