import { TestBed, inject } from '@angular/core/testing';

import { GamfService } from './gamf.service';

describe('GamfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamfService]
    });
  });

  it('should be created', inject([GamfService], (service: GamfService) => {
    expect(service).toBeTruthy();
  }));
});
