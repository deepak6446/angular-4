import { TestBed, inject } from '@angular/core/testing';

import { SerService } from './ser.service';

describe('SerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerService]
    });
  });

  it('should be created', inject([SerService], (service: SerService) => {
    expect(service).toBeTruthy();
  }));
});
