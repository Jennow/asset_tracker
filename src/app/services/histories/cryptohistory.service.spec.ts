import { TestBed } from '@angular/core/testing';

import { CryptohistoryService } from './cryptohistory.service';

describe('CryptohistoryService', () => {
  let service: CryptohistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptohistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
