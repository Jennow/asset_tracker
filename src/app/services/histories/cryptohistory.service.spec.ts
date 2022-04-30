import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CryptohistoryService } from './cryptohistory.service';

describe('CryptohistoryService', () => {
  let service: CryptohistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(CryptohistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
