import { TestBed, inject } from '@angular/core/testing';

import { CiderService } from './cider.service';

describe('CiderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CiderService]
    });
  });

  it('should be created', inject([CiderService], (service: CiderService) => {
    expect(service).toBeTruthy();
  }));
});
