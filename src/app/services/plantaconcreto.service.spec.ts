import { TestBed } from '@angular/core/testing';

import { PlantaconcretoService } from './plantaconcreto.service';

describe('PlantaconcretoService', () => {
  let service: PlantaconcretoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantaconcretoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
