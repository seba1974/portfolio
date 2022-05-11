import { TestBed } from '@angular/core/testing';

import { RedessocialesService } from './redessociales.service';

describe('RedessocialesService', () => {
  let service: RedessocialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedessocialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
