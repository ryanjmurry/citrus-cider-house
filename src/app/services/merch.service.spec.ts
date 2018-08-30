import { TestBed, inject } from '@angular/core/testing';

import { MerchItemService } from './merch-item.service';

describe('MerchItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MerchItemService]
    });
  });

  it('should be created', inject([MerchItemService], (service: MerchItemService) => {
    expect(service).toBeTruthy();
  }));
});
