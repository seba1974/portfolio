import { TestBed } from '@angular/core/testing';

import { SrvdataService } from './srvdata.service';

describe('SrvdataService', () => {
  let service: SrvdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
