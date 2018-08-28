import { TestBed, inject } from '@angular/core/testing';

import { MenuItemService } from './menu.service';

describe('MenuItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuItemService]
    });
  });

  it('should be created', inject([MenuItemService], (service: MenuItemService) => {
    expect(service).toBeTruthy();
  }));
});
