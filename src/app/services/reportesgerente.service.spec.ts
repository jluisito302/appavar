import { TestBed } from '@angular/core/testing';

import { ReportesgerenteService } from './reportesgerente.service';

describe('ReportesgerenteService', () => {
  let service: ReportesgerenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportesgerenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
