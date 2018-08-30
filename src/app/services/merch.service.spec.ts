import { TestBed, inject } from '@angular/core/testing';

import { MerchService } from './merch.service';

describe('MerchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MerchService]
    });
  });

  it('should be created', inject([MerchService], (service: MerchService) => {
    expect(service).toBeTruthy();
  }));
});
