import { TestBed } from '@angular/core/testing';

import { EndpointSimulationService } from './endpoint-simulation.service';

describe('EndpointSimulationService', () => {
  let service: EndpointSimulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointSimulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
