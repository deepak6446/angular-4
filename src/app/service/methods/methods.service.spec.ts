import { TestBed, inject } from '@angular/core/testing';

import { MethodsService } from './methods.service';

describe('MethodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MethodsService]
    });
  });

  it('should be created', inject([MethodsService], (service: MethodsService) => {
    expect(service).toBeTruthy();
  }));
});
