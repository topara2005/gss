import { TestBed, inject } from '@angular/core/testing';

import { AirgroundService } from './airground.service';

describe('AirgroundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirgroundService]
    });
  });

  it('should be created', inject([AirgroundService], (service: AirgroundService) => {
    expect(service).toBeTruthy();
  }));
});
