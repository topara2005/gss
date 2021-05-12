import { TestBed, inject } from '@angular/core/testing';

import { HelicopterService } from './helicopter.service';

describe('HelicopterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelicopterService]
    });
  });

  it('should be created', inject([HelicopterService], (service: HelicopterService) => {
    expect(service).toBeTruthy();
  }));
});
