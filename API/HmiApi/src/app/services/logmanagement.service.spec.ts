import { TestBed, inject } from '@angular/core/testing';

import { LogmanagementService } from './logmanagement.service';

describe('LogmanagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogmanagementService]
    });
  });

  it('should be created', inject([LogmanagementService], (service: LogmanagementService) => {
    expect(service).toBeTruthy();
  }));
});
